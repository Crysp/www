import React from 'react';
import { Markdown } from '~/shared/ui/Markdown';
import Container from '@components/Container';
import Head from 'next/head';
import Layout from '@components/Layout';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import { Knowledge } from '~/features/knowledge/core/types';
import Heading from '~/shared/ui/Heading';

export type ArticleProps = Knowledge;

export const Article: React.FC<ArticleProps> = ({ meta, content }) => {
  return (
    <Layout>
      <NavBar />
      <Container>
        <article className='mb-32'>
          <Head>
            <title>{meta.title}</title>
            <meta property='og:title' content={meta.title} />
            <meta property='og:description' content={meta.summary} />
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
