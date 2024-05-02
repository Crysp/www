export type MessageMeta = {
  title: string;
  publishedAt: string;
};
export type Message = {
  id: string;
  meta: MessageMeta;
  content: string;
};
