import React from 'react';
import { Card } from '@nextui-org/react';
import { JetBrains_Mono } from 'next/font/google';
import { MDComponent } from '../../kernel';

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic']
});

export const CodeBlock: MDComponent<'pre'> = ({ children }) => {
  return (
    <Card
      as='pre'
      className='border-none bg-stone-50 -mx-6 my-10 px-4 py-2 overflow-x-auto'
      shadow='none'
      style={mono.style}
    >
      {children}
    </Card>
  );
};
