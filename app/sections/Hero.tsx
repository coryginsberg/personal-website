/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { Container } from '@mantine/core';

import * as React from 'react';

import HeroLeft from 'sections/HeroLeft';
import HeroRight from 'sections/HeroRight';

import styles from '@styles/hero.module.css';

export default function Hero(): React.ReactElement {
  return (
    <Container fluid={true}>
      <div className={styles.hero}>
        <HeroLeft />
        <HeroRight />
      </div>
    </Container>
  );
}
