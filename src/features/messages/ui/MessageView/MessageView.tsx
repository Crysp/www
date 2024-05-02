import Container from '@components/Container';
import Head from 'next/head';
import { Message as MessageBlock } from '~/features/messages/ui/Message';
import Layout from '@components/Layout';
import React from 'react';
import { Message } from '~/features/messages/core/types';

export type MessageViewProps = Message;

export const MessageView: React.FC<MessageViewProps> = ({ meta, content }) => {
  return (
    <Layout>
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
          <MessageBlock
            title={meta.title}
            publishedAt={meta.publishedAt}
            content={content}
          />
        </article>
      </Container>
    </Layout>
  );
};
