import { MDComponent } from '../kernel';

export const Table: MDComponent<'table'> = props => (
  <div className='-mx-6 p-6 z-0 flex flex-col relative justify-between gap-4 bg-stone-50 overflow-auto rounded-large'>
    <table className='min-w-full h-auto table-auto w-full' {...props} />
  </div>
);
