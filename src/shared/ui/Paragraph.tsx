import React from 'react';
import { MDComponent } from '../kernel';

export const Paragraph: MDComponent<'p'> = props => (
  <div className='my-2 last:mb-0' {...props} />
);
