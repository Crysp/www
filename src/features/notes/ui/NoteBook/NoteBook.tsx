import Head from 'next/head';
import NavBar from '@components/NavBar';
import Container from '@components/Container';
import { Link } from '@nextui-org/react';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import React from 'react';
import { Note } from '~/features/notes/core/types';

export type NoteBookProps = {
  notes: Note[];
};

export const NoteBook: React.FC<NoteBookProps> = ({ notes }) => {
  return (
    <Layout>
      <Head>
        <title>Заметки | Виталик Леонов</title>
      </Head>
      <NavBar />
      <Container>
        {notes.map(note => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            {note.meta.title}
          </Link>
        ))}
      </Container>
      <Footer />
    </Layout>
  );
};
