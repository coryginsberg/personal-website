/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Grid, HoverCard, Text, Title } from '@mantine/core';

import { Pills } from 'helpers/TextPillHelper';
import * as React from 'react';
import { theme } from 'theme';

import RoundedButton from 'components/RoundedButton';
import TextPill from 'components/TextPill';

import styles from '@styles/hero.module.css';

export default function HeroLeft(): React.ReactElement {
  const pills = (
    <Grid className={styles.pillSection} w={'50%'}>
      {Pills.map((pill, idx) => (
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
        I&apos;m a professional software developer with more than 5 years of
        experience.
      </Text>
      <RoundedButton
        gradient={{
          from: theme.colors.blue[8],
          to: theme.colors.blue[4],
          deg: 15,
        }}
        className={styles.button}
        shouldAnimate={true}
        size="xl"
        variant="gradient"
        onClick={() => {
          window.open('/Resume.pdf', '_target');
        }}>
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
