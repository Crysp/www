import React from 'react';

type Props = React.HTMLProps<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<Props> = ({ level, ...htmlProps }) => {
  const Component = tagName[level];

  return <Component {...htmlProps} />;
};

const tagName: Record<
  Props['level'],
  React.FC<React.JSX.IntrinsicElements['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']>
> = {
  1: props => <h1 {...props} className='text-5xl font-semibold my-4' />,
  2: props => <h2 {...props} className='text-4xl font-semibold my-4' />,
  3: props => <h3 {...props} className='text-3xl font-semibold my-4' />,
  4: props => <h4 {...props} className='text-2xl font-semibold my-2' />,
  5: props => <h5 {...props} className='text-xl font-semibold my-2' />,
  6: props => <h6 {...props} className='text-l font-semibold my-2' />
};

export default Heading;
