'use client';

import {gsap} from 'gsap';
import * as React from 'react';
import {useLayoutEffect, useRef, useState} from 'react';

import {Button, ButtonProps} from '@nextui-org/react';

type Props = {
  children: string;
  color?: ButtonProps['color'];
  backgroundColor?: string;
  className?: ButtonProps['className'];
  shouldAnimate?: boolean;
  onPress?: () => void;
};

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
      color={props.color}
      radius="full"
      size="lg"
      variant="flat"
      onMouseEnter={() => {
        zoom?.play();
        wiggle?.restart();
      }}
      onMouseLeave={() => {
        zoom?.pause(0);
      }}
      className={props.className}
      onPress={props.onPress}>
      {props.children}
    </Button>
    // <button
    //   ref={buttonRef}
    //   className={props.className ?? styles.button}
    //   style={{
    //     color: props.color,
    //   }}
    //   onMouseEnter={() => {
    //     zoom?.play();
    //     wiggle?.restart();
    //   }}
    //   onMouseLeave={() => {
    //     zoom?.pause(0);
    //   }}
    //   onClick={props.onClick}>
    //   {props.children}
    // </button>
  );
}
