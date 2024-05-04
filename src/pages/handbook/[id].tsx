import { GetStaticPaths, GetStaticProps } from 'next';
import { Article, ArticleProps } from '~/features/knowledge/ui/Article';
import {
  fetchKnowledge,
  fetchKnowledgeCollection
} from '~/features/knowledge/infrastructure/storage';

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params
}) => {
  const id = String(params?.id);
  const result = await fetchKnowledge(id);

  if (result.isLeft()) {
    throw result.value;
  }

  return { props: result.value };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const handbook = await fetchKnowledgeCollection();
  const paths = Object.values(handbook).reduce(
    (acc, articles) => [
      ...acc,
      ...articles.map(article => ({ params: { id: article.id } }))
    ],
    [] as { params: { id: string } }[]
  );

  return {
    paths,
    fallback: false
  };
};

export default Article;
