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
  description: string;
};

export default function ProjectCard(props: Props): React.ReactElement<any> {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const hoverTween = useRef<gsap.core.Tween>(undefined);

  useLayoutEffect(() => {
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.2,
      ease: Power4.easeInOut,
      paused: true,
    });
  }, []);

  const mouseMoveEvent = (e: MouseEvent) => {
    if (!cardRef.current || !rootRef.current) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const rootRect = rootRef.current.getBoundingClientRect();
    const xPos = e.clientX - (rect.left + rect.width / 2);
    const yPos = e.clientY - (rect.top + rect.height / 2);
    const xRatio = xPos / (rect.width / 2);
    const yRatio = yPos / (rect.height / 2);
    const maxTranslate = 10; // max translation in px
    const maxScale = 1.03; // max scale

    hoverTween.current?.kill();
    hoverTween.current = gsap.to(cardRef.current, {
      translateX: xRatio * maxTranslate,
      translateY: yRatio * maxTranslate,
      scale: maxScale,
      duration: 0.3,
      ease: Power4.easeOut,
    });
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
        <h3 className={styles.text}>{props.title}</h3>
        <p>{props.description}</p>
      </Anchor>
    </div>
  );
}
