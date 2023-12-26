/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

import {useCallback, useEffect, useState} from 'react';

export enum ScreenSizes {
  Small = 640,
  Medium = 1024,
  Large = 1280,
}

export function useScreenSize() {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(
    () => (hasWindow ? window.innerWidth : 0),
    [hasWindow],
  );

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setWindowDimensions(getWindowDimensions());

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    return () => {};
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}
