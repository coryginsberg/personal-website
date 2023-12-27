/**
<<<<<<< HEAD
<<<<<<< HEAD
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
=======
 * Copyright © 2023 Cory Ginsberg
 * Released under the MIT License.
>>>>>>> 4652f08 (Added copyright header to all files under /app)
=======
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
>>>>>>> 0697aa5 (Updated file headers)
 */

import * as React from 'react';
import HeroLeft from 'sections/HeroLeft';
import HeroRight from 'sections/HeroRight';

import styles from '@styles/hero.module.scss';

export default function Hero(): React.ReactElement {
  return (
    <div className={styles.hero}>
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
