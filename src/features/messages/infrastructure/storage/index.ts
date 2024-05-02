import { fetchContent, fetchList } from '~/services/storage/storage';
import { FetchMessage, FetchMessages } from '../../core/ports.output';
import { toDomain } from './toDomain';
import { vault } from './storage.config';

export const fetchMessage: FetchMessage = async id =>
  fetchContent(vault, id, toDomain);

export const fetchMessages: FetchMessages = async () =>
  (await fetchList(vault, toDomain)).sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime()
  );
