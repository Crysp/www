import { MDComponent } from '../kernel';

export const TableHeaderCell: MDComponent<'th'> = props => (
  <th
    className='group px-3 h-10 text-left uppercase rtl:text-right align-middle bg-white whitespace-nowrap text-foreground-500 text-small font-semibold first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] data-[sortable=true]:transition-colors data-[sortable=true]:cursor-pointer data-[hover=true]:text-foreground-400 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2'
    {...props}
  />
);
