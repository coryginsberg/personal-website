/**
<<<<<<< HEAD
<<<<<<< HEAD
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
=======
 * Copyright © 2023 Cory Ginsberg
 * Released under the MIT License.
>>>>>>> 4652f08 (Added copyright header to all files under /app)
=======
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
>>>>>>> 0697aa5 (Updated file headers)
 */

'use client';

import RoundedButton from 'components/RoundedButton';
import Image from 'next/image';
import * as React from 'react';

import {ThemeSwitcher} from 'components/ThemeSwitcher';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react';
import {useState} from 'react';
import {ScreenSizes, useScreenSize} from 'helpers/ScreenSize';

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: Array<{[key: string]: string}> = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/cory-ginsberg/',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/coryginsberg',
    },
  ];

  const menuLinks = menuItems.map((item, idx) => (
    <Link href={item.link} key={idx} size="md" color="secondary">
      {item.name}
    </Link>
  ));

  const menuButtons = [
    <RoundedButton
      color="secondary"
      size={useScreenSize() <= ScreenSizes.Small ? 'lg' : 'md'}
      className="bg-foreground text-content3 w-fit mt-4 mb-4 sm:mt-0 sm:mb-0"
      as={Link}
      href={'mailto:cory.ginsberg1@gmail.com'}
      key={1}>
      Contact me
    </RoundedButton>,
    <div className="right-0 relative w-auto ml-auto sm:ml-0" key={2}>
      <ThemeSwitcher />
    </div>,
  ];

  return (
    <Navbar
      position="static"
      isBlurred={false}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="pt-2">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarContent justify="start" className="hidden sm:flex gap-4">
        {menuLinks.map((link, idx) => (
          <NavbarItem key={idx}>{link}</NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="ml-auto mr-auto sm:ml-100 sm:mr-100">
        <NavbarBrand>
          <Image
            src="/Logo.svg"
            alt="Personal Logo"
            priority={true}
            width={60}
            height={60}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {menuButtons}
      </NavbarContent>
      <NavbarMenu>
        <NavbarContent className="sm:flex gap-4 !flex-grow-0 justify-between">
          {menuButtons}
        </NavbarContent>
        {menuLinks.map((link, idx) => (
          <NavbarMenuItem key={idx}>{link}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
