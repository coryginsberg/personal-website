/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

const {nextui} = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Roboto', 'ui-sans-serif', 'system-ui'],
      body: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        disabledOpacity: 0.5,
        radius: {
          small: '8px',
          medium: '12px',
          large: '14px',
        },
        fontSize: {
          small: '16px',
          medium: '20px',
          large: '42px',
        },
      },
      colors: {
        blue: {
          DEFAULT: '#00a0ff',
          100: '#CCF8FF',
          200: '#99EBFF',
          300: '#66D8FF',
          400: '#3FC3FF',
          500: '#00a0ff',
          600: '#007CDB',
          700: '#005CB7',
          800: '#004193',
          900: '#002E7A',
        },
      },
      themes: {
        light: {
          layout: {},
          colors: {
            background: '#FFFFFF',
            foreground: '#212121',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#00a0ff',
            },
            secondary: {
              foreground: '#212127',
              DEFAULT: '#212127',
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: '#212127',
            foreground: '#fdfdfd',
            primary: {
              foreground: '#00a0ff',
              DEFAULT: '#00a0ff',
            },
            secondary: {
              foreground: '#fdfdfd',
              DEFAULT: '#fdfdfd',
            },
          },
        },
      },
    }),
  ],
};
