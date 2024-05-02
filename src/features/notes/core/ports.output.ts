import { FetchStorageFile } from '~/shared/kernel';
import { Note } from '~/features/notes/core/types';

export type FetchNote = FetchStorageFile<Note>;
export type FetchNotes = () => Promise<Note[]>;
