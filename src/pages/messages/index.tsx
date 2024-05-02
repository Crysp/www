import React from 'react';
import Head from 'next/head';
import Container from '@components/Container';
import Layout from '@components/Layout';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import { Message } from '~/features/messages/core/types';
import { fetchMessages } from '~/features/messages/infrastructure/storage';
import { Message as MessageBlock } from '~/features/messages/ui/Message';

type Props = {
  allMessages: Message[];
};

const MessagesIndex: React.FC<Props> = ({ allMessages }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Сообщения | Виталик Леонов</title>
        </Head>
        <NavBar />
        <Container>
          {allMessages.map(message => (
            <MessageBlock
              key={message.id}
              title={message.meta.title}
              content={message.content}
              publishedAt={message.meta.publishedAt}
            />
          ))}
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allMessages = await fetchMessages();

  return {
    props: { allMessages }
  };
};

export default MessagesIndex;
