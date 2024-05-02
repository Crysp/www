import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Link } from './Link';
import { NumericList } from './NumericList';
import { List } from './List';
import { Paragraph } from './Paragraph';
import { Bold } from './Bold';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { H6 } from './H6';
import { Image } from './Image';
import { Blockquote } from './Blockquote';
import { Hr } from './Hr';
import { CodeBlock } from './CodeBlock';
import { Code } from './Code';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableHeaderCell } from './TableHeaderCell';

type Props = {
  content: string;
};

export const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <MDXRemote
      compiledSource={content}
      scope={null}
      frontmatter={null}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        a: Link,
        ol: NumericList,
        ul: List,
        p: Paragraph,
        strong: Bold,
        blockquote: Blockquote,
        hr: Hr,
        pre: CodeBlock,
        code: Code,
        img: Image,
        table: Table,
        thead: TableHeader,
        th: TableHeaderCell,
        td: TableCell,
        tr: TableRow
      }}
    />
  );
};
