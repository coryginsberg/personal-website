/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import {
  ActionIcon,
  Box,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

import { IconMoon, IconSun } from '@tabler/icons-react';
import * as React from 'react';
import { theme } from 'theme';

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
      radius="xl"
      color={theme.white}
      aria-label="Toggle color scheme">
      <Box lightHidden={true}>
        <IconSun className={styles.icon} />
      </Box>
      <Box darkHidden={true}>
        <IconMoon className={styles.icon} />
      </Box>
    </ActionIcon>
  );
}
