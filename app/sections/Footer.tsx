/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */
import * as React from 'react';

import styles from '@styles/footer.module.scss';

type Props = Readonly<{}>;

export default function Footer(props: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <h5 className={styles.copyright}>Made by Cory Ginsberg. MIT License</h5>
      <p className={styles.openSource}>
        <a
          href="https://github.com/coryginsberg/personal-website-2023"
          className={styles.link}>
          Click here to see the source code
        </a>
      </p>
    </div>
  );
}
