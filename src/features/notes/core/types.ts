export type NoteMeta = {
  title: string;
  publishedAt: string;
};
export type Note = {
  id: string;
  meta: NoteMeta;
  content: string;
};
