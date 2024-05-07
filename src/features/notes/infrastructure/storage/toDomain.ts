import { Note } from '~/features/notes/core/types';
import { asSerializedMDX } from '~/services/storage/storage.content.asSerializedMDX';
import { Either, left, right } from '@sweet-monads/either';

export type NoteDTO = {
  id: string;
  meta: Record<string, any>;
  content: string;
};

export const toDomain = async (dto: NoteDTO): Promise<Either<Error, Note>> => {
  if (process.env.NODE_ENV === 'production' && !dto.meta.published) {
    return left(new NoteMetaMissed('published'));
  }

  if (!dto.meta.title) {
    return left(new NoteMetaMissed('title'));
  }
  if (!dto.meta.summary) {
    return left(new NoteMetaMissed('summary'));
  }
  if (!dto.meta.published_at) {
    return left(new NoteMetaMissed('published_at'));
  }

  return right({
    id: dto.id,
    meta: {
      title: dto.meta.title,
      cover: dto.meta.cover,
      thumbnail: dto.meta.thumbnail,
      summary: dto.meta.summary,
      published: true,
      publishedAt: dto.meta.published_at.toISOString()
    },
    content: await asSerializedMDX(dto.content)
  });
};

class NoteMetaMissed extends Error {
  constructor(key: string) {
    super(`fetchContent: "${key}" not found`);
    this.name = 'MessageMetaMissed';
  }
}
