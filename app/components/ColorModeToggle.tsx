/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

import cx from 'clsx';
import * as React from 'react';
import { PiMoonBold, PiSunBold } from 'react-icons/pi';

import styles from '@styles/components/colorModeToggle.module.css';

export default function ColorModeToggle(): React.ReactElement {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme">
      <PiSunBold className={cx(styles.icon, styles.light)} />
      <PiMoonBold className={cx(styles.icon, styles.dark)} />
    </ActionIcon>
  );
}
