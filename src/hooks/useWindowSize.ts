'use client';

import { useEffect, useState } from 'react';

interface SizeProps {
  height: number;
  width: number;
  isDesktop: boolean;
}

export const useWindowSize = (): SizeProps => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    isDesktop: window.innerWidth >= 1365,
  });

  const [windowSize, setWindowSize] = useState<SizeProps>(
    typeof window !== 'undefined'
      ? getSize()
      : { width: 0, height: 0, isDesktop: false },
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    handleResize(); // Atualiza o tamanho inicial ao montar o componente

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
