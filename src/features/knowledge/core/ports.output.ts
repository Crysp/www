import { FetchStorageFile } from '~/shared/kernel';
import { Handbook, Knowledge } from '~/features/knowledge/core/types';

export type FetchKnowledge = FetchStorageFile<Knowledge>;
export type FetchKnowledgeCollection = () => Promise<Handbook>;
