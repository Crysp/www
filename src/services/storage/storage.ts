import fs from 'fs';
import path from 'path';
import { Either, left, right } from '@sweet-monads/either';
import matter from 'gray-matter';
import { storageDir } from '~/services/storage/storage.config';
import { StorageFile } from '../../shared/kernel';

export const fetchContent = async <
  Meta extends Record<string, any>,
  Target extends StorageFile<Meta> = StorageFile<Meta>
>(
  dir: string,
  id: string,
  convert?: (file: StorageFile<Meta>) => Promise<Either<Error, Target>>
): Promise<Either<Error, Target>> => {
  const contentPath = path.join(storageDir, dir, id, id + '.md');

  if (!fs.existsSync(contentPath)) {
    return left(new ContentNotFoundError(contentPath));
  }

  const file = fs.readFileSync(contentPath, 'utf-8');
  const meta = matter(file);
  const storageFile = {
    id,
    meta: meta.data as Meta,
    content: meta.content
  };

  if (convert) {
    const result = await convert(storageFile);

    if (result.isLeft()) {
      return left(result.value);
    }

    return right(result.value);
  }

  return right(storageFile as Target);
};

export const fetchList = async <
  Meta extends Record<string, any>,
  Target extends StorageFile<Meta> = StorageFile<Meta>
>(
  dir: string,
  convert?: (file: StorageFile<Meta>) => Promise<Either<Error, Target>>
): Promise<Target[]> => {
  const files = fs.readdirSync(path.join(storageDir, dir));
  const ids = files.filter(file =>
    fs.statSync(path.join(storageDir, dir, file)).isDirectory()
  );
  const storageFiles = await Promise.all(
    ids.map(id => fetchContent(dir, id, convert))
  );

  return storageFiles
    .filter(file => file.isRight())
    .map(file => file.value) as Target[];
};

class ContentNotFoundError extends Error {
  constructor(contentPath: string) {
    super(`fetchContent: "${contentPath}" not found`);
    this.name = 'ContentNotFoundError';
  }
}
