import React from 'react';
import { Either } from '@sweet-monads/either';

export type StorageFile<Meta extends Record<string, any>, Content = string> = {
  id: string;
  meta: Meta;
  content: Content;
};

export type FetchStorageFile<File extends StorageFile<any, any>> = (
  id: string
) => Promise<Either<Error, File>>;
export type FetchStorageIds = () => Promise<string[]>;

export type MDComponent<TagName extends keyof React.JSX.IntrinsicElements> =
  React.ComponentType<React.JSX.IntrinsicElements[TagName]>;
