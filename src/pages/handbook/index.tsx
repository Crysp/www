import { GetStaticProps } from 'next';
import { fetchKnowledgeCollection } from '~/features/knowledge/infrastructure/storage';
import { Handbook, HandbookProps } from '~/features/knowledge/ui/Handbook';

export const getStaticProps: GetStaticProps<HandbookProps> = async () => {
  const articles = await fetchKnowledgeCollection();

  return { props: { articles } };
};

export default Handbook;
