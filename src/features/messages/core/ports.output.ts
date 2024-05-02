import { FetchStorageFile } from '~/shared/kernel';
import { Message } from './types';

export type FetchMessage = FetchStorageFile<Message>;
export type FetchMessages = () => Promise<Message[]>;
