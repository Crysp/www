import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  Tabs,
  Tab
} from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  const isIndex = pathname === '/';
  const isMessages = pathname === '/messages';
  const isNotes = pathname === '/notes';
  const isHandbook = pathname === '/handbook';

  return (
    <Navbar position='static' className='mb-12'>
      <NavbarBrand>
        <User
          name='Виталик Леонов'
          description='Developing with ❤️'
          avatarProps={{
            src: '/photo.png',
            isBordered: isIndex
          }}
          isFocusable
          className='cursor-pointer'
          onClick={() => navigate.push('/')}
        />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive={isMessages}>
          <Link
            color='foreground'
            href='/messages'
            aria-current={isMessages ? 'page' : false}
          >
            Сообщения
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isNotes}>
          <Link
            color='foreground'
            href='/notes'
            aria-current={isNotes ? 'page' : false}
          >
            Заметки
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isHandbook}>
          <Link
            color='foreground'
            href='/handbook'
            aria-current={isHandbook ? 'page' : false}
          >
            Справочник
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {/*<NavbarItem>*/}
        {/*  <Tabs size='sm' aria-label='Languages'>*/}
        {/*    <Tab key='ru' title='RU' />*/}
        {/*    <Tab key='en' title='EN' />*/}
        {/*  </Tabs>*/}
        {/*</NavbarItem>*/}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
