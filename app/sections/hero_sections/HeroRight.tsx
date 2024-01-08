/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Paper, Text, Title } from '@mantine/core';

import gsap from 'gsap';
import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { Temporal } from 'temporal-polyfill';
import { theme } from 'theme';

import Headshot from 'components/Headshot';

import styles from '@styles/hero.module.css';

export default function HeroRight(): React.ReactElement {
  const blurbRef = useRef<HTMLImageElement>(null);
  const hoverTween = useRef<gsap.core.Tween>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const temp = (e: MouseEvent) => {
        const xPos =
          e.clientX /
          (blurbRef.current?.getBoundingClientRect().width ?? 1) /
          2;
        const yPos =
          e.clientY /
          (blurbRef.current?.getBoundingClientRect().height ?? 1) /
          2;
        hoverTween.current = gsap.to(blurbRef.current, {
          translateX: -xPos * 4,
          translateY: -yPos * 4,
          duration: 0.2,
        });
      };
      document.addEventListener('mousemove', temp);
    });

    return () => ctx.revert();
  }, []);

  /** WARNING: THIS IS EXPERIMENTAL CODE!!!
   * This is using a polyfill of the new Temporal Date/Time API for JS.
   * As of this writing, the proposal is in stage 3 and should hit stage 4
   * sometime in the next few months.
   * @see Proposal: https://github.com/tc39/proposal-temporal
   * @see Polyfill: https://www.npmjs.com/package/temporal-polyfill
   * @see Documentation: https://tc39.es/proposal-temporal/docs/index.html
   */
  const calcYearsExperience = (): number => {
    const currentDate = Temporal.Now.plainDateISO();
    const startDate = Temporal.PlainDate.from({
      year: 2018,
      month: 7,
      day: 1,
    });
    return currentDate.since(startDate, { smallestUnit: 'year' }).years;
  };

  return (
    <div className={styles.heroRight}>
      <Paper
        ref={blurbRef}
        radius="lg"
        shadow="lg"
        color={theme.colors.gray[8]}
        classNames={{ root: styles.heroText }}>
        <Title>{calcYearsExperience()}+</Title>
        <Text>years experience</Text>
      </Paper>
      <div className={styles.imagePopout}>
        <Headshot />
      </div>
    </div>
  );
}
