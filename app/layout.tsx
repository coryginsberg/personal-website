import * as React from 'react';
import Footer from 'sections/Footer';
import Header from 'sections/Header';

import '@styles/globals.scss';

export const metadata = {
  title: 'Cory Ginsberg',
  description: 'My personal portfolio website.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
