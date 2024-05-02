import { NoteView as NotePage, NoteProps } from '~/features/notes/ui/Note';
import { fetchNote, fetchNotes } from '~/features/notes/infrastructure/storage';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<NoteProps> = async ({ params }) => {
  const id = String(params?.id);
  const result = await fetchNote(id);

  if (result.isLeft()) {
    throw result.value;
  }

  return { props: result.value };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await fetchNotes();
  const paths = notes.map(note => ({ params: { id: note.id } }));

  return {
    paths,
    fallback: false
  };
};

export default NotePage;
