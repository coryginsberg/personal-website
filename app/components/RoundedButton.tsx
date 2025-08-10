/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

'use client';

import { Button, ButtonProps } from '@mantine/core';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import * as React from 'react';

interface Props extends ButtonProps {
  children: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  variant?: string;
  shouldAnimate?: boolean;
  onClick?: () => void;
}

export default function RoundedButton(props: Props): React.ReactElement<any> {
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
          .repeatDelay(15)
          .to(buttonRef.current, {
            scale: 1.05,
            duration: 0.1,
          })
          .delay(1)
          .to(buttonRef.current, {
            rotation: 10,
            duration: 0.075,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.075,
          })
          .to(buttonRef.current, {
            rotation: -10,
            duration: 0.065,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.065,
          })
          .to(buttonRef.current, {
            rotation: 10,
            duration: 0.055,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.055,
          })
          .to(buttonRef.current, {
            rotation: -10,
            duration: 0.075,
          })
          .to(buttonRef.current, {
            rotation: 0,
            duration: 0.075,
          })
          .delay(1)
          .to(buttonRef.current, {
            scale: 1,
            duration: 0.1,
          }),
      );

      setZoom(
        gsap.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.25,
          paused: true,
        }),
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
        wiggle?.pause();
      }}
      onMouseLeave={() => {
        zoom?.reverse();
        wiggle?.resume();
      }}
      onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
