import { Knowledge } from '~/features/knowledge/core/types';
import { asSerializedMDX } from '~/services/storage/storage.content.asSerializedMDX';
import { Either, left, right } from '@sweet-monads/either';

export type KnowledgeDTO = {
  id: string;
  meta: Record<string, any>;
  content: string;
};

export const toDomain = async (
  dto: KnowledgeDTO
): Promise<Either<Error, Knowledge>> => {
  if (!dto.meta.title) {
    return left(new KnowledgeMetaMissed('title'));
  }
  if (!dto.meta.theme) {
    return left(new KnowledgeMetaMissed('theme'));
  }
  if (!dto.meta.order) {
    return left(new KnowledgeMetaMissed('order'));
  }
  if (!dto.meta.published_at) {
    return left(new KnowledgeMetaMissed('published_at'));
  }

  return right({
    id: dto.id,
    meta: {
      title: dto.meta.title,
      theme: dto.meta.theme,
      order: dto.meta.order,
      publishedAt: dto.meta.published_at.toISOString()
    },
    content: await asSerializedMDX(dto.content)
  });
};

class KnowledgeMetaMissed extends Error {
  constructor(key: string) {
    super(`fetchContent: "${key}" not found`);
    this.name = 'KnowledgeMetaMissed';
  }
}
