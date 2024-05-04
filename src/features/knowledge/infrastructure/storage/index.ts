import { fetchContent, fetchList } from '~/services/storage/storage';
import { vault } from '~/features/knowledge/infrastructure/storage/config';
import { toDomain } from '~/features/knowledge/infrastructure/storage/toDomain';
import {
  FetchKnowledge,
  FetchKnowledgeCollection
} from '~/features/knowledge/core/ports.output';
import { Knowledge } from '~/features/knowledge/core/types';

export const fetchKnowledge: FetchKnowledge = id =>
  fetchContent(vault, id, toDomain);
export const fetchKnowledgeCollection: FetchKnowledgeCollection = async () => {
  const articles = await fetchList(vault, toDomain);
  const handbook = new Map<string, Knowledge[]>();

  articles.forEach(article => {
    if (!handbook.has(article.meta.theme)) {
      handbook.set(article.meta.theme, []);
    }

    handbook.get(article.meta.theme)!.push(article);
  });

  handbook.forEach((articles, theme) => {
    handbook.set(
      theme,
      articles.sort((a, b) => a.meta.order - b.meta.order)
    );
  });

  return Object.fromEntries(handbook.entries());
};
