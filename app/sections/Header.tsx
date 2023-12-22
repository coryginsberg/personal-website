'use client';

import RoundedButton from 'components/RoundedButton';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import header from '@styles/header.module.scss';
import {ThemeSwitcher} from 'components/ThemeSwitcher';

export default function Header(): React.ReactElement {
  return (
    <div className={header.root}>
      <div className={header.sectionLinks}>
        <Link href="https://github.com/coryginsberg" className={header.link}>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/cory-ginsberg/"
          className={header.link}>
          LinkedIn
        </Link>
      </div>
      <div className={header.logo}>
        <Image
          src="/Logo.svg"
          alt="Personal Logo"
          priority={true}
          width={60}
          height={60}
        />
      </div>
      <div className="flex right-0 absolute gap-4 place-items-center">
        <Link href="mailto:cory.ginsberg1@gmail.com">
          <RoundedButton
            color="secondary"
            size="md"
            className="bg-foreground text-content3">
            Contact me
          </RoundedButton>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
