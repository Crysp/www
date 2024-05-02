import React from 'react';
import Markdown from 'react-markdown';

const Test: React.FC = () => {
  return <Markdown>**bold**```const a = 1; const b = 2;```</Markdown>;
};

export default Test;
