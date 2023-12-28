/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import igbPreview from '@public/igb_preview.png';
import mfbPreview from '@public/mfb_preview.png';
import rtwPreview from '@public/rtw_preview.png';
import * as React from 'react';

import ProjectCard from 'components/ProjectCard';

import styles from '@styles/projects.module.scss';
 
export function Projects(): React.ReactElement {
  return (
    <div className={styles.root}>
      <h1>Project Spotlight</h1>
      <div className={styles.projectsLayout}>
        <ProjectCard
          title="Meta for Business"
          src={mfbPreview}
          href={'https://www.facebook.com/business/'}
        />
        <ProjectCard
          title="Reach The World On Facebook"
          src={rtwPreview}
          href={'https://reachtheworldonfacebook.com/'}
        />
        <ProjectCard
          title="Instagram for Business"
          src={igbPreview}
          href={'https://business.instagram.com/'}
        />
      </div>
    </div>
  );
}
