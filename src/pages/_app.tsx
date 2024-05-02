import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/index.css';
import '../shared/styles/code-palette.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const navigate = useRouter();

  return (
    <NextUIProvider navigate={navigate.push}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App;
