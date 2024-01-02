/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */
'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import RoundedButton from 'components/RoundedButton';

import header from '@styles/header.module.css';

const links = [
  { label: 'GitHub', link: 'https://github.com/coryginsberg' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/cory-ginsberg/' },
];

export default function Header(): React.ReactElement {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map(link => (
    <Link
      key={link.label}
      href={link.link}
      className={header.link}
      onClick={event => {
        event.preventDefault();
      }}>
      {link.label}
    </Link>
  ));

  return (
    <header className={header.root}>
      <Container size="xl" className={header.inner}>
        <Group gap={8} visibleFrom="xs">
          {items}
        </Group>
        <Image
          src="/Logo.svg"
          alt="Personal Logo"
          priority={true}
          width={60}
          height={60}
        />
        <Group className={header.buttonGroup}>
          <Link href="mailto:cory.ginsberg1@gmail.com">
            <RoundedButton>Contact me</RoundedButton>
          </Link>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
