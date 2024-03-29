/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Anchor, useStyles } from '@mantine/core';

import gsap, { Power4 } from 'gsap';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { theme } from 'theme';

import styles from '@styles/components/projectCard.module.css';

type Props = {
  title: string;
  src: StaticImageData;
  href: string;
};

export default function ProjectCard(props: Props): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const hoverTween = useRef<gsap.core.Tween>();

  useLayoutEffect(() => {
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.2,
      ease: Power4.easeInOut,
      paused: true,
    });
  }, []);

  const mouseMoveEvent = (e: MouseEvent) => {
    const xPos =
      e.clientX / (cardRef.current?.getBoundingClientRect().width ?? 1);
    const yPos =
      e.clientY / (cardRef.current?.getBoundingClientRect().height ?? 1);
    hoverTween.current = gsap
      .to(cardRef.current, {
        translateX: -xPos * 20,
        translateY: -yPos * 20,
        scale: 1.1,
      })
      .play();
  };

  const onMouseEnterHandler = () => {
    document.addEventListener('mousemove', mouseMoveEvent);
  };

  const onMouseLeaveHandler = () => {
    gsap.to(cardRef.current, {
      translateX: 0,
      translateY: 0,
      scale: 1.0,
    });
    document.removeEventListener('mousemove', mouseMoveEvent);
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <Anchor
        href={props.href?.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        underline="never"
        size="lg"
        style={{ color: 'var(--mantine-color-text)' }}>
        <Image
          className={styles.image}
          alt={`Preview Image for ${props.title}`}
          src={props.src}
          height={450}
          width={450}
          quality={100}
          placeholder="blur"
          ref={cardRef}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        />
        <div className={styles.text}>{props.title}</div>
      </Anchor>
    </div>
  );
}
