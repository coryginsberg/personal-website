/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import * as React from 'react';

import Hero from 'sections/Hero';
import { Projects } from 'sections/Projects';

import '@mantine/core/styles.css';

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}
