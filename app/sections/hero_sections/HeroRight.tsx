/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Paper, Text } from '@mantine/core';

import gsap from 'gsap';
import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
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

  return (
    <div className={styles.heroRight}>
      <Paper
        ref={blurbRef}
        radius="lg"
        shadow="md"
        color={theme.colors?.gray && theme.colors.gray[8]}
        className={styles.heroText}>
        <Text>5+</Text>
        <Text>years experience</Text>
      </Paper>
      <div className={styles.imagePopout}>
        <Headshot />
      </div>
    </div>
  );
}
