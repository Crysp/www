export type KnowledgeMeta = {
  title: string;
  theme: string;
  order: number;
  summary: string;
  publishedAt: string;
};
export type Knowledge = {
  id: string;
  meta: KnowledgeMeta;
  content: string;
};
export type Handbook = Record<string, Knowledge[]>;
