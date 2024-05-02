import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta property='og:site_name' content='Виталик Леонов' />
        <meta name='telegram:channel' content='@naverstal' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
