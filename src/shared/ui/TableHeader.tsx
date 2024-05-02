import { MDComponent } from '../kernel';

export const TableHeader: MDComponent<'thead'> = props => (
  <thead className='[&>tr]:first:rounded-lg' {...props} />
);
