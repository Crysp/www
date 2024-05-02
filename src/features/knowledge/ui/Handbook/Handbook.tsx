import Head from 'next/head';
import NavBar from '@components/NavBar';
import Container from '@components/Container';
import { Link } from '@nextui-org/react';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import React from 'react';
import { Knowledge } from '~/features/knowledge/core/types';

export type HandbookProps = {
  articles: Knowledge[];
};

export const Handbook: React.FC<HandbookProps> = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>Статьи | Виталик Леонов</title>
      </Head>
      <NavBar />
      <Container>
        {articles.map(articles => (
          <Link key={articles.id} href={`/handbook/${articles.id}`}>
            {articles.meta.title}
          </Link>
        ))}
      </Container>
      <Footer />
    </Layout>
  );
};
