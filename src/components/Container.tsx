import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='container max-w-screen-lg mx-auto px-5 flex flex-col'>
      {children}
    </div>
  );
};

export default Container;
