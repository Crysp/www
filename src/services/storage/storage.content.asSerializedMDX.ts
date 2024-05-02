import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import typography from '@mavrin/remark-typograf';
import headingIds from 'rehype-slug';
import headingAnchors from 'rehype-autolink-headings';
import syntaxHighlight from 'rehype-highlight';
import fsharp from 'highlight.js/lib/languages/fsharp';

export const asSerializedMDX = async (value: string): Promise<string> =>
  (
    await serialize(value, {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          remarkUnwrapImages,
          [
            typography,
            {
              locale: ['ru'],
              disableRule: ['*'],
              enableRule: ['common/nbsp/*', 'ru/nbsp/*']
            }
          ]
        ],
        rehypePlugins: [
          headingIds,
          [
            headingAnchors,
            {
              behavior: 'append',
              content: [],
              properties: {
                className: 'anchor'
              }
            }
          ],
          [
            // @ts-ignore
            syntaxHighlight,
            { language: fsharp }
          ]
        ]
      }
    })
  ).compiledSource;
