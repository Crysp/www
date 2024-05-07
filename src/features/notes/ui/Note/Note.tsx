import React from 'react';
import { Markdown } from '~/shared/ui/Markdown';
import Container from '@components/Container';
import Head from 'next/head';
import Layout from '@components/Layout';
import { Note } from '~/features/notes/core/types';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Heading from '~/shared/ui/Heading';

export type NoteProps = Note;

export const NoteView: React.FC<NoteProps> = ({ meta, content }) => {
  return (
    <Layout>
      <NavBar />
      <Container>
        <article>
          <Head>
            <title>{meta.title}</title>
            <meta property='og:title' content={meta.title} />
            <meta property='og:description' content={meta.summary} />
            {meta.cover && meta.cover.includes('.mp4') && (
              <meta property='og:video' content={meta.cover} />
            )}
            {meta.cover && !meta.cover.includes('.mp4') && (
              <meta property='og:image' content={meta.cover} />
            )}
          </Head>
          <div className='max-w-2xl mx-auto'>
            <Heading level={1}>{meta.title}</Heading>
            <Markdown content={content} />
          </div>
        </article>
      </Container>
      <Footer />
    </Layout>
  );
};
