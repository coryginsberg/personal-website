/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { SpeedInsights } from '@vercel/speed-insights/next';
import * as React from 'react';
import { theme } from 'theme';

import Footer from 'sections/Footer';
import Header from 'sections/Header';

import '@styles/globals.css';

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
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
