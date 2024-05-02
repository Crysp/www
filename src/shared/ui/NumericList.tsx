import React from 'react';
import { MDComponent } from '../kernel';

export const NumericList: MDComponent<'ol'> = props => (
  <ol
    className='list-decimal flex flex-col my-2 gap-2 pl-4 last:mb-0'
    {...props}
  />
);
