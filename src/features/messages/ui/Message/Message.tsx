import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link
} from '@nextui-org/react';
import { format } from 'date-fns';
import { Markdown } from '~/shared/ui/Markdown';

type Props = {
  title: string;
  source?: string;
  content: string;
  publishedAt: string;
};

export const Message: React.FC<Props> = ({
  title,
  source,
  content,
  publishedAt
}) => {
  return (
    <Card className='max-w-[600px]'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='logo'
          height={40}
          radius='sm'
          src='/tg_cover.png'
          width={40}
        />
        <div className='flex flex-col'>
          <h2 className='text-md font-semibold'>{title}</h2>
          <Link href='https://t.me/naverstal' isExternal className='text-small'>
            https://t.me/naverstal
          </Link>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Markdown content={content} />
      </CardBody>
      <CardFooter className='flex justify-end'>
        <p className='text-xs text-default-500'>
          {format(new Date(publishedAt), 'dd MMM yyyy, HH:mm')}
        </p>
      </CardFooter>
    </Card>
  );
};
