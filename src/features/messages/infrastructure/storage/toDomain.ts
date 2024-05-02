import { Either, left, right } from '@sweet-monads/either';
import { asSerializedMDX } from '~/services/storage/storage.content.asSerializedMDX';
import { Message } from '../../core/types';

type MessageDTO = {
  id: string;
  meta: Record<string, any>;
  content: string;
};

export const toDomain = async (
  dto: MessageDTO
): Promise<Either<Error, Message>> => {
  if (!dto.meta.title) {
    return left(new MessageMetaMissed('title'));
  }
  if (!dto.meta.published_at) {
    return left(new MessageMetaMissed('published_at'));
  }

  return right({
    id: dto.id,
    meta: {
      title: dto.meta.title,
      publishedAt: dto.meta.published_at.toISOString()
    },
    content: await asSerializedMDX(dto.content)
  });
};

class MessageMetaMissed extends Error {
  constructor(key: string) {
    super(`fetchContent: "${key}" not found`);
    this.name = 'MessageMetaMissed';
  }
}
