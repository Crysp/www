import React from 'react';
import { MDComponent } from '../kernel';

export const NumericList: MDComponent<'ol'> = props => (
  <ol
    className='list-decimal flex flex-col my-2 gap-2 pl-6 last:mb-0 marker:text-gray-400'
    {...props}
  />
);
