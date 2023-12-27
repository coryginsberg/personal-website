/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import * as React from 'react';
import Footer from 'sections/Footer';
import Header from 'sections/Header';

import {ColorSchemeScript, MantineProvider} from '@mantine/core';

import '@styles/globals.scss';
import '@mantine/core/styles.css';
import { theme } from 'theme';

export const metadata = {
  title: 'Cory Ginsberg',
  description: 'My personal portfolio website.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
