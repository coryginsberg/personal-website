/**
 * Copyright © 2023 Cory Ginsberg
 * Released under the MIT License.
 */

import * as React from 'react';
import Hero from 'sections/Hero';
import {Projects} from 'sections/Projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}
