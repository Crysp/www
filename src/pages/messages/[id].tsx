import {
  fetchMessage,
  fetchMessages
} from '~/features/messages/infrastructure/storage';
import {
  MessageView as MessagePage,
  MessageViewProps
} from '~/features/messages/ui/MessageView';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<MessageViewProps> = async ({
  params
}) => {
  const id = String(params?.id);
  const result = await fetchMessage(id);

  if (result.isLeft()) {
    throw result.value;
  }

  return { props: result.value };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const messages = await fetchMessages();
  const paths = messages.map(message => ({
    params: {
      id: message.id
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export default MessagePage;
