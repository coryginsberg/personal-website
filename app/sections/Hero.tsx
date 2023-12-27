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
