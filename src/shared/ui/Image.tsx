import { Image as NextImage } from '@nextui-org/react';
import { MDComponent } from '../kernel';

export const Image: MDComponent<'img'> = props => {
  // @ts-ignore
  return <NextImage {...props} />;
};
