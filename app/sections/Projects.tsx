import ProjectCard from 'components/ProjectCard';
import * as React from 'react';

import styles from '@styles/projects.module.scss';

import igbPreview from '@public/igb_preview.png';
import mfbPreview from '@public/mfb_preview.png';
import rtwPreview from '@public/rtw_preview.png';

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
