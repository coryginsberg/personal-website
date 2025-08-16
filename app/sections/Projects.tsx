/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import * as React from 'react';

import ProjectCard from 'components/ProjectCard';

import styles from '@styles/projects.module.css';

import igbPreview from '@public/instagram-logo.webp';
import mfbPreview from '@public/meta-logo.webp';
import rtwPreview from '@public/rtw-logo.webp';

export function Projects(): React.ReactElement<any> {
  return (
    <div className={styles.root}>
      <h1>Project Spotlight</h1>
      <div className={styles.projectsLayout}>
        <ProjectCard
          title="About Instagram"
          description="Currently leading development on Instagram's official corporate site, showcasing company news and culture."
          src={igbPreview}
          href={'https://about.instagram.com/'}
        />
        <ProjectCard
          title="Meta for Business"
          description="Built and maintained Meta's business-facing site, providing resources for advertisers and partners."
          src={mfbPreview}
          href={'https://www.meta.com/business/'}
        />
        <ProjectCard
          title="Reach The World On Facebook"
          description="Developed the Reach The World on Facebook site to help advertisers in China learn how to utilize the platform."
          src={rtwPreview}
          href={'https://reachtheworldonfacebook.com/'}
        />
      </div>
    </div>
  );
}
