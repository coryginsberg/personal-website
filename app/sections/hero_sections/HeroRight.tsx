'use client';

import Headshot from 'components/Headshot';
import gsap from 'gsap';
import * as React from 'react';
import {useLayoutEffect, useRef} from 'react';

import styles from '@styles/hero.module.scss';

export default function HeroRight(): React.ReactElement {
  const blurbRef = useRef<HTMLImageElement>(null);
  const hoverTween = useRef<gsap.core.Tween>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const temp = (e: MouseEvent) => {
        const xPos =
          e.clientX /
          (blurbRef.current?.getBoundingClientRect().width ?? 1) /
          2;
        const yPos =
          e.clientY /
          (blurbRef.current?.getBoundingClientRect().height ?? 1) /
          2;
        hoverTween.current = gsap.to(blurbRef.current, {
          translateX: -xPos * 4,
          translateY: -yPos * 4,
          duration: 0.2,
        });
      };
      document.addEventListener('mousemove', temp);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.heroRight}>
      <div className={styles.heroText} ref={blurbRef}>
        <div className={styles.largeText}>5+</div>
        <div className={styles.smallText}>years experience</div>
      </div>
      <div className={styles.imagePopout}>
        <Headshot />
      </div>
    </div>
  );
}
