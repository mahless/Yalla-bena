import { useCallback, useRef } from 'react';

export function useHaptics(enabled: boolean = true) {
  const isEnabled = useRef(enabled);
  isEnabled.current = enabled;

  const trigger = useCallback((pattern: number | number[]) => {
    if (!isEnabled.current) return;
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {}
    }
  }, []);

  const light = useCallback(() => {
    trigger(12);
  }, [trigger]);

  const medium = useCallback(() => {
    trigger(25);
  }, [trigger]);

  const heavy = useCallback(() => {
    trigger(50);
  }, [trigger]);

  const success = useCallback(() => {
    trigger([20, 60, 40]);
  }, [trigger]);

  const flip = useCallback(() => {
    trigger([15, 25]);
  }, [trigger]);

  return {
    light,
    medium,
    heavy,
    success,
    flip,
  };
}
