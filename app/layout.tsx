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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="../favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
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
