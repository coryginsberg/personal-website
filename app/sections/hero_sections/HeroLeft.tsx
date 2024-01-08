/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Grid, Text, Title } from '@mantine/core';

import * as React from 'react';
import { theme } from 'theme';

import RoundedButton from 'components/RoundedButton';
import TextPill from 'components/TextPill';

import styles from '@styles/hero.module.css';

import ReactLogo from '@public/language/React_logo.svg';
import TypeScriptLogo from '@public/language/Typescript_logo.svg';
import PythonLogo from '@public/language/python_logo.svg';
import SwiftLogo from '@public/language/swift_logo.svg';

export default function HeroLeft(): React.ReactElement {
  const pills = (
    <Grid className={styles.pillSection} w={'50%'}>
      <TextPill color="#2a2c32" leftSection={<ReactLogo />}>
        React
      </TextPill>
      <TextPill color="#235a97" leftSection={<TypeScriptLogo />}>
        TypeScript
      </TextPill>
      <TextPill color={theme.primaryColor} leftSection={<PythonLogo />}>
        Python
      </TextPill>
      <TextPill
        color={theme.colors?.gray && theme.colors?.gray[4]}
        leftSection={<SwiftLogo />}>
        Swift
      </TextPill>
    </Grid>
  );

  return (
    <div className={styles.heroLeft}>
      <Title className={styles.header}>
        Hi, I&apos;m <br /> <b>Cory Ginsberg</b>.
      </Title>
      <Text className={styles.blurb} mt="md" fz="lg">
        I&apos;m a professional software developer with more than 5 years of
        experience.
      </Text>
      <RoundedButton
        color={theme.colors?.blue && theme.colors?.blue[6]}
        className={styles.button}
        shouldAnimate={true}
        size="xl"
        variant="filled"
        onClick={() => {
          window.open('/Resume.pdf', '_target');
        }}>
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
