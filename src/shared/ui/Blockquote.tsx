import React, { PropsWithChildren } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { MDComponent } from '../kernel';

export const Blockquote: MDComponent<'blockquote'> = ({ children }) => {
  return (
    <Card
      className='border-none bg-amber-50/70 -ml-6 -mr-6 px-6 py-4'
      shadow='none'
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};
