import { FetchNote, FetchNotes } from '~/features/notes/core/ports.output';
import { fetchContent, fetchList } from '~/services/storage/storage';
import { vault } from '~/features/notes/infrastructure/storage/config';
import { toDomain } from '~/features/notes/infrastructure/storage/toDomain';

export const fetchNote: FetchNote = id => fetchContent(vault, id, toDomain);
export const fetchNotes: FetchNotes = async () =>
  (await fetchList(vault, toDomain)).sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime()
  );
