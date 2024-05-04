import Head from 'next/head';
import NavBar from '@components/NavBar';
import Container from '@components/Container';
import { Link } from '@nextui-org/react';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import React from 'react';
import { Handbook } from '~/features/knowledge/core/types';
import Heading from '~/shared/ui/Heading';
import { NumericList } from '~/shared/ui/NumericList';

export type HandbookProps = {
  handbook: Handbook;
};

export const HandbookView: React.FC<HandbookProps> = ({ handbook }) => {
  return (
    <Layout>
      <Head>
        <title>Статьи | Виталик Леонов</title>
      </Head>
      <NavBar />
      <Container>
        {Object.keys(handbook).map(theme => (
          <React.Fragment key={theme}>
            <Heading level={5}>{theme}</Heading>
            <NumericList>
              {handbook[theme].map(articles => (
                <li key={articles.id}>
                  <Link href={`/handbook/${articles.id}`}>
                    {articles.meta.title}
                  </Link>
                </li>
              ))}
            </NumericList>
          </React.Fragment>
        ))}
      </Container>
      <Footer />
    </Layout>
  );
};
