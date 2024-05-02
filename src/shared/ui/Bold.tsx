import React from 'react';
import { MDComponent } from '../kernel';

export const Bold: MDComponent<'strong'> = props => (
  <b className='font-semibold' {...props} />
);
