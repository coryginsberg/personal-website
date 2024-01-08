/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { Anchor, Text } from '@mantine/core';

import React from 'react';
import { theme } from 'theme';

import ReactLogo from '@public/language/React_logo.svg';
import TypeScriptLogo from '@public/language/Typescript_logo.svg';
import PythonLogo from '@public/language/python_logo.svg';
import SwiftLogo from '@public/language/swift_logo.svg';

export type PillInfo = {
  color: string;
  text: string;
  icon: React.ReactElement<'svg'>;
  blurb: string | React.ReactElement<Text>;
};

export const Pills: PillInfo[] = [
  {
    color: '#2a2c32',
    text: 'React',
    icon: <ReactLogo />,
    blurb:
      "5+ years experience. Used in nearly every project I've been on at Meta.",
  },
  {
    color: '#235a97',
    text: 'TypeScript',
    icon: <TypeScriptLogo />,
    blurb: (
      <Text>
        5+ years experience. Used a combination of TypeScript and{' '}
        <Anchor href="https://flow.org/" target="_blank">
          Flow
        </Anchor>{' '}
        on Meta projects.
      </Text>
    ),
  },
  {
    color: theme.primaryColor,
    text: 'Python',
    icon: <PythonLogo />,
    blurb: '3+ years experience',
  },
  {
    color: theme.colors.gray[4],
    text: 'Swift',
    icon: <SwiftLogo />,
    blurb: (
      <Text>
        4+ years experience. Mostly personal projects. Currently working on{' '}
        <Anchor
          href="https://github.com/coryginsberg/Hermes-for-Hacker-News"
          target="_blank">
          an iOS app
        </Anchor>{' '}
        for{' '}
        <Anchor href="https://news.ycombinator.com/" target="_blank">
          HackerNews
        </Anchor>
        .
      </Text>
    ),
  },
];
