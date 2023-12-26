/**
<<<<<<< HEAD
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
=======
 * Copyright © 2023 Cory Ginsberg
 * Released under the MIT License.
>>>>>>> 4652f08 (Added copyright header to all files under /app)
 */

import * as React from 'react';

import styles from '@styles/components/textPill.module.scss';

type Props = {
  backgroundColor: string;
  textColor: string;
  imageLeft: React.ReactNode;
  children: string;
};

export default function TextPill(props: Props): React.ReactElement {
  return (
    <div
      className={styles.root}
      style={{backgroundColor: props.backgroundColor, color: props.textColor}}>
      {props.imageLeft}
      <span className={styles.text}>{props.children}</span>
    </div>
  );
}
