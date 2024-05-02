export type KnowledgeMeta = {
  title: string;
  publishedAt: string;
};
export type Knowledge = {
  id: string;
  meta: KnowledgeMeta;
  content: string;
};
