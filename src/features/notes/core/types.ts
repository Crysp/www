export type NoteMeta = {
  title: string;
  summary: string;
  cover?: string;
  thumbnail?: string;
  published: boolean;
  publishedAt: string;
};
export type Note = {
  id: string;
  meta: NoteMeta;
  content: string;
};
