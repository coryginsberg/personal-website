/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import { Badge, BadgeProps, Grid } from '@mantine/core';

import * as React from 'react';
import { forwardRef } from 'react';

import styles from '@styles/components/textPill.module.css';

interface Props extends BadgeProps {
  children: string;
}

export type Ref = HTMLDivElement;

// Forward ref needed for HoverCard
// @see https://mantine.dev/core/hover-card/#required-ref-prop
const TextPill = forwardRef<Ref, Props>((props, ref) => (
  <Grid.Col span="content" ref={ref}>
    <Badge
      {...props}
      size="xl"
      radius="md"
      h={60}
      classNames={{ section: styles.section, label: styles.label }}>
      {props.children}
    </Badge>
  </Grid.Col>
));

export default TextPill;
