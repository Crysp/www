import React from 'react';
import { MDComponent } from '../kernel';

export const List: MDComponent<'ul'> = props => (
  <ul
    className='list-disc flex flex-col my-2 pl-4 gap-2 last:mb-0'
    {...props}
  />
);
