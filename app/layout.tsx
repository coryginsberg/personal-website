/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import * as React from 'react';
import Footer from 'sections/Footer';
import Header from 'sections/Header';
import {Providers} from './providers';

import '@styles/globals.scss';

export const metadata = {
  title: 'Cory Ginsberg',
  description: 'My personal portfolio website.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <main className="text-foreground bg-background">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
