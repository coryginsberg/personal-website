/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { Anchor, Text } from '@mantine/core';

import React from 'react';
import { theme } from 'theme';

import { calcYearsExperience } from './calculations';

import ReactLogo from '@public/language/React_logo.svg';
import TypeScriptLogo from '@public/language/Typescript_logo.svg';
import GraphQLLogo from '@public/language/graphql_logo.svg';
import HackLogo from '@public/language/hack_logo.svg';
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
    blurb: (
      <Text>
        {calcYearsExperience()}+ years experience. Used in nearly every project
        I've been on at Meta.
      </Text>
    ),
  },
  {
    color: '#235a97',
    text: 'TypeScript',
    icon: <TypeScriptLogo />,
    blurb: (
      <Text>
        {calcYearsExperience()}+ years experience. Used a combination of
        TypeScript and{' '}
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
    blurb: (
      <Text>
        {calcYearsExperience() - 3}+ years experience. Used on several internal
        projects at Meta, along with personal scripts for my own use.
      </Text>
    ),
  },
  {
    color: '#EF5139',
    text: 'Swift',
    icon: <SwiftLogo />,
    blurb: (
      <Text>
        {calcYearsExperience() - 2}+ years experience. Mostly personal projects.
        Currently working on{' '}
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
  {
    color: '#E10098',
    text: 'GraphQL',
    icon: <GraphQLLogo />,
    blurb: (
      <Text>
        {calcYearsExperience() - 4}+ years experience. Used on various Meta
        projects, as well as personal projects.
      </Text>
    ),
  },
  {
    color: theme.colors.gray[6],
    text: 'Hack/PHP',
    icon: <HackLogo />,
    blurb: (
      <Text>
        {calcYearsExperience()}+ years experience. Hack is a dialect of PHP
        created by Meta. I've used it on nearly every internal Meta project I've
        been on.
      </Text>
    ),
  },
];
