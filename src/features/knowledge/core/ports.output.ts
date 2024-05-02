import { FetchStorageFile } from '~/shared/kernel';
import { Knowledge } from '~/features/knowledge/core/types';

export type FetchKnowledge = FetchStorageFile<Knowledge>;
export type FetchKnowledgeCollection = () => Promise<Knowledge[]>;
