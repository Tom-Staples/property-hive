'use client';
import { useState, useEffect } from 'react';

export default function useScreenSize(): number {
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => setDeviceWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceWidth;
}
