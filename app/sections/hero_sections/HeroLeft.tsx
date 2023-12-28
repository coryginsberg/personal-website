/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import {Grid, Group, Text, Title} from '@mantine/core';

import pythonLogo from '@public/python_logo.svg';
import reactLogo from '@public/react_logo.png';
import swiftLogo from '@public/swift_logo.svg';
import tsLogo from '@public/ts_logo.png';
import Image from 'next/image';
import * as React from 'react';
import {theme} from 'theme';

import RoundedButton from 'components/RoundedButton';
import TextPill from 'components/TextPill';
 
import styles from '@styles/hero.module.scss';
import vars from '@styles/variables.module.scss';

export default function HeroLeft(): React.ReactElement {
  const pills = (
    <Grid className={styles.pillSection} w={'50%'}>
      <TextPill
        color="#2a2c32"
        leftSection={
          <Image src={reactLogo} alt="React Logo" width={38} height={30} />
        }>
        React
      </TextPill>
      <TextPill
        color="#235a97"
        leftSection={
          <Image src={tsLogo} alt="TypeScript Logo" width={38} height={30} />
        }>
        TypeScript
      </TextPill>
      <TextPill
        color={theme.primaryColor}
        leftSection={
          <Image src={pythonLogo} alt="Python Logo" width={32} height={30} />
        }>
        Python
      </TextPill>
      <TextPill
        color={vars.gray}
        leftSection={
          <Image src={swiftLogo} alt="Swift Logo" width={38} height={30} />
        }
        c={theme.black}>
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
        backgroundColor={vars.accentColor}
        color={vars.textColorLight}
        className={styles.button}
        shouldAnimate={true}
        onClick={() => {
          window.open('/Resume.pdf', '_target');
        }}>
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
