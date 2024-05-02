import React from 'react';
import { Markdown } from '~/shared/ui/Markdown';
import Container from '@components/Container';
import Head from 'next/head';
import Layout from '@components/Layout';
import { Note } from '~/features/notes/core/types';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

export type NoteProps = Note;

export const NoteView: React.FC<NoteProps> = ({ meta, content }) => {
  return (
    <Layout>
      <NavBar />
      <Container>
        <article className='mb-32'>
          <Head>
            <title>{meta.title}</title>
            <meta property='og:title' content={meta.title} />
            <meta
              property='og:description'
              content='Summary within 60 characters'
            />
            <meta property='og:image' content='#' />
          </Head>
          <div className='max-w-2xl mx-auto'>
            <Markdown content={content} />
          </div>
        </article>
      </Container>
      <Footer />
    </Layout>
  );
};
