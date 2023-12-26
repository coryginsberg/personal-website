/**
 * Copyright © 2023 Cory Ginsberg
 * Released under the MIT License.
 */

'use client';

import {gsap} from 'gsap';
import * as React from 'react';
import {useLayoutEffect, useRef, useState} from 'react';

import {Button, ButtonProps} from '@nextui-org/react';

interface Props extends ButtonProps {
  children: string;
  backgroundColor?: string;
  shouldAnimate?: boolean;
  onPress?: () => void;
}

export default function RoundedButton(props: Props): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState<gsap.core.Tween | null>();
  const [wiggle, setWiggle] = useState<gsap.core.Timeline | null>();
  useLayoutEffect(() => {
    if (!props.shouldAnimate || !buttonRef.current) {
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
        gsap.to(buttonRef.current, {scale: 1.1, duration: 0.1, paused: true}),
      );
    });

    return () => ctx.revert();
  }, [props.shouldAnimate]);

  return (
    <Button
      ref={buttonRef}
      radius="full"
      size={props.size ?? 'lg'}
      variant={props.variant ?? 'flat'}
      onMouseEnter={() => {
        zoom?.play();
        wiggle?.restart();
      }}
      onMouseLeave={() => {
        zoom?.pause(0);
      }}
      {...props}>
      {props.children}
    </Button>
  );
}
