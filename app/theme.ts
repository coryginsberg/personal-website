/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { generateColors } from '@mantine/colors-generator';
import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  black: '#2a2426',
  white: '#fdfdfd',
  primaryColor: 'blue',
  primaryShade: 6,
  colors: {
    blue: generateColors('#00a0ff'),
    body: generateColors('#000000'),
  },
  fontFamily: 'Roboto, sans-serif',
  fontSizes: {
    sm: rem(12),
    md: rem(15),
    lg: rem(18),
    lx: rem(25),
  },
  defaultRadius: 'md',
  respectReducedMotion: true,
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  autoContrast: true,
  luminanceThreshold: 0.6,
});
