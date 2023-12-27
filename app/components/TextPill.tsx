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
