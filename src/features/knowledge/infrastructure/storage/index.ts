import { fetchContent, fetchList } from '~/services/storage/storage';
import { vault } from '~/features/knowledge/infrastructure/storage/config';
import { toDomain } from '~/features/knowledge/infrastructure/storage/toDomain';
import {
  FetchKnowledge,
  FetchKnowledgeCollection
} from '~/features/knowledge/core/ports.output';

export const fetchKnowledge: FetchKnowledge = id =>
  fetchContent(vault, id, toDomain);
export const fetchKnowledgeCollection: FetchKnowledgeCollection = async () =>
  (await fetchList(vault, toDomain)).sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime()
  );
