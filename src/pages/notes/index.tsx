import { fetchNotes } from '~/features/notes/infrastructure/storage';
import { NoteBook, NoteBookProps } from '~/features/notes/ui/NoteBook';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<NoteBookProps> = async () => {
  const notes = await fetchNotes();

  return { props: { notes } };
};

export default NoteBook;
