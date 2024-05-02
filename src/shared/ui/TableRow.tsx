import { MDComponent } from '../kernel';

export const TableRow: MDComponent<'tr'> = props => (
  <tr
    className='group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2'
    {...props}
  />
);
