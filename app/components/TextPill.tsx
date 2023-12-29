/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */
import { Badge, BadgeProps, Grid } from '@mantine/core';

import * as React from 'react';

import styles from '@styles/components/textPill.module.css';

interface Props extends BadgeProps {
  children: string;
}

export default function TextPill(props: Props): React.ReactElement {
  return (
    <Grid.Col span="content">
      <Badge
        {...props}
        size="xl"
        radius="md"
        h={60}
        classNames={{ section: styles.section, label: styles.label }}>
        {props.children}
      </Badge>
    </Grid.Col>
  );
}
