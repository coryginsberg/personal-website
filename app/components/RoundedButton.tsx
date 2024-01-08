/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Button, ButtonProps } from '@mantine/core';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import * as React from 'react';
import { theme } from 'theme';

interface Props extends ButtonProps {
  children: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  variant?: string;
  shouldAnimate?: boolean;
  onClick?: () => void;
}

export default function RoundedButton(props: Props): React.ReactElement {
  const { shouldAnimate, ...buttonProps } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState<gsap.core.Tween | null>();
  const [wiggle, setWiggle] = useState<gsap.core.Timeline | null>();
  useLayoutEffect(() => {
    if (!shouldAnimate || !buttonRef.current) {
      return () => null;
    }
    const ctx = gsap.context(() => {
      setWiggle(
        gsap
          .timeline({
            repeat: -1,
            ease: 'power3.inOut',
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 30,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: -30,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 30,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: -30,
            duration: 0.05,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.05,
          })
          .repeatDelay(8),
      );

      setZoom(
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.1, paused: true }),
      );
    });

    return () => ctx.revert();
  }, [shouldAnimate]);

  return (
    <Button
      {...buttonProps}
      ref={buttonRef}
      radius="xl"
      variant={props.variant ?? 'default'}
      onMouseEnter={() => {
        zoom?.play();
        wiggle?.restart();
      }}
      onMouseLeave={() => {
        zoom?.pause(0);
      }}
      onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
