/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Grid, HoverCard, Text, Title } from '@mantine/core';

import { Pills as PillsInfo } from 'helpers/PillTextHelper';
import { calcYearsExperience } from 'helpers/calculations';
import * as React from 'react';

import TextPill from 'components/TextPill';

import styles from '@styles/hero.module.css';

export default function HeroLeft(): React.ReactElement<any> {
  const PillComponents = (
    <Grid className={styles.pillSection} w={'70%'}>
      {PillsInfo.map((pill, idx) => (
        <HoverCard
          key={idx}
          shadow="md"
          withArrow={true}
          offset={2}
          withinPortal={false}
          width={'auto'}>
          <HoverCard.Target>
            <TextPill color={pill.color} leftSection={pill.icon}>
              {pill.text}
            </TextPill>
          </HoverCard.Target>
          <HoverCard.Dropdown style={{ maxWidth: '300px' }}>
            <Text size="md">{pill.blurb}</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      ))}
    </Grid>
  );

  return (
    <div className={styles.heroLeft}>
      <Title className={styles.header}>
        Hi, I&apos;m <br /> <b>Cory Ginsberg</b>.
      </Title>
      <Text className={styles.blurb} mt="md" fz="lg">
        I&apos;m a professional software developer with more than{' '}
        {calcYearsExperience()} years of experience.
      </Text>
      {PillComponents}
    </div>
  );
}
