import React from 'react';
import { Link } from '@nextui-org/react';

const Footer: React.FC = () => (
  <footer className='flex z-40 w-full h-auto items-center justify-center mt-12 mb-12'>
    <div className='z-40 flex px-6 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]'>
      <div className='flex-row space-x-4'>
        <Link href='https://teemmeetinger.com' size='sm' isExternal>
          Teem
        </Link>
        <Link href='https://t.me/just_lyonya' size='sm' isExternal>
          Telegram
        </Link>
        <Link href='https://github.com/Crysp' size='sm' isExternal>
          GitHub
        </Link>
        <Link
          href='https://www.linkedin.com/in/vitaliy-leonov-7b3874152/'
          size='sm'
          isExternal
        >
          LinkedIn
        </Link>
      </div>
      <span className='text-sm'>2023+</span>
    </div>
  </footer>
);

export default Footer;
