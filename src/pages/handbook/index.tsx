import { GetStaticProps } from 'next';
import { fetchKnowledgeCollection } from '~/features/knowledge/infrastructure/storage';
import { HandbookView, HandbookProps } from '~/features/knowledge/ui/Handbook';

export const getStaticProps: GetStaticProps<HandbookProps> = async () => {
  const handbook = await fetchKnowledgeCollection();

  return { props: { handbook } };
};

export default HandbookView;
