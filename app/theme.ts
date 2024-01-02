/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */
import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  black: '#2a2426',
  white: '#fdfdfd',
  primaryColor: 'blue',
  primaryShade: 6,
  colors: {
    // or replace default theme color
    blue: [
      '#e1f9ff',
      '#cbeeff',
      '#9adaff',
      '#64c5ff',
      '#3bb4fe',
      '#21a9fe',
      '#09a3ff',
      '#008ee4',
      '#007ecd',
      '#006eb6',
    ],
  },
  fontFamily: 'Roboto, sans-serif',
  fontSizes: {
    sm: rem(15),
    md: rem(17),
    lg: rem(20),
    lx: rem(28),
  },
  defaultRadius: 'md',
  respectReducedMotion: true,
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
