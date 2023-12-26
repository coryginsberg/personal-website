/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import TextPill from 'components/TextPill';
import Image from 'next/image';
import * as React from 'react';

import styles from '@styles/hero.module.scss';
import vars from '@styles/variables.module.scss';

import pythonLogo from '@public/python_logo.svg';
import reactLogo from '@public/react_logo.png';
import swiftLogo from '@public/swift_logo.svg';
import tsLogo from '@public/ts_logo.png';
import RoundedButton from 'components/RoundedButton';

export default function HeroLeft(): React.ReactElement {
  const pills = (
    <div className={styles.pillSection}>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.reactBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image src={reactLogo} alt="React Logo" width={38} height={30} />
          }>
          React
        </TextPill>
        <TextPill
          backgroundColor={vars.tsBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image src={tsLogo} alt="TypeScript Logo" width={38} height={30} />
          }>
          TypeScript
        </TextPill>
      </div>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.accentColor}
          textColor={vars.textColorLight}
          imageLeft={
            <Image src={pythonLogo} alt="Python Logo" width={32} height={30} />
          }>
          Python
        </TextPill>
        <TextPill
          backgroundColor={vars.gray}
          textColor={vars.textColorDark}
          imageLeft={
            <Image src={swiftLogo} alt="Swift Logo" width={38} height={30} />
          }>
          Swift
        </TextPill>
      </div>
    </div>
  );

  return (
    <div className={styles.heroLeft}>
      <div className={styles.header}>
        Hi, I&apos;m <br /> <b>Cory Ginsberg</b>.
      </div>
      <p className={styles.blurb}>
        I&apos;m a professional software developer with more than 5 years of
        experience.
      </p>
      <RoundedButton
        backgroundColor={vars.accentColor}
        color={'primary'}
        className={'bg-gradient-to-tr from-blue-500 to-blue-400 text-gray-100'}
        shouldAnimate={true}
        onPress={() => {
          window.open('/Resume.pdf', '_target');
        }}>
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
