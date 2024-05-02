import React, { PropsWithChildren } from 'react';
import Meta from './Meta';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Meta />
      <main className='min-h-screen'>{children}</main>
    </>
  );
};

export default Layout;
