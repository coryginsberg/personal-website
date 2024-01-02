/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import * as React from 'react';
import { theme } from 'theme';

import Footer from 'sections/Footer';
import Header from 'sections/Header';

import '@styles/globals.scss';

export const metadata = {
  title: 'Cory Ginsberg',
  description: 'My personal portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <SpeedInsights />
      </body>
    </html>
  );
}
