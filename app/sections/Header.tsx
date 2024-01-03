/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Burger, Container, Group, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { theme } from 'theme';

import ColorModeToggle from 'components/ColorModeToggle';
import RoundedButton from 'components/RoundedButton';

import header from '@styles/header.module.css';

const links = [
  {
    label: 'GitHub',
    link: 'https://github.com/coryginsberg',
    icon: <IconBrandGithub style={{ width: rem(24), height: rem(24) }} />,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cory-ginsberg/',
    icon: <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} />,
  },
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
      <Container className={header.inner} fluid={true}>
        <Menu
          opened={opened}
          onChange={toggle}
          position="bottom-end"
          width="100%"
          transitionProps={{
            transition: 'scale-y',
            timingFunction: 'ease',
          }}>
          <Group justify="space-between" wrap="nowrap">
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
            <Group wrap="nowrap">
              <Link
                href="mailto:cory.ginsberg1@gmail.com"
                className={header.buttonGroup}>
                <RoundedButton color={theme.black} size="md">
                  Contact me
                </RoundedButton>
              </Link>
              <ColorModeToggle />
            </Group>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="xs"
                size="sm"
                className={header.burger}
              />
            </Menu.Target>
          </Group>
          <Menu.Dropdown
            className={header.dropdown}
            style={{ border: 'none', borderRadius: 0 }}>
            <Menu.Label style={{ paddingLeft: 20 }}>Links</Menu.Label>
            {links.map((item, key) => (
              <Menu.Item
                key={key}
                leftSection={item.icon}
                component="a"
                href={item.link}
                target="_blank"
                style={{
                  fontSize: theme.fontSizes?.md,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 8,
                }}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
