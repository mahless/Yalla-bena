import { useEffect } from 'react';

/**
 * Native Android Back button & browser popstate handler
 * Pushes state to history when a modal or game screen is shown,
 * and intercepts hardware back button to pop views gracefully.
 */
export function useBackButton(
  isActive: boolean,
  onBack: () => void,
  priorityKey: string
) {
  useEffect(() => {
    if (!isActive) return;

    const stateKey = `yallanarghy_state_${priorityKey}`;
    window.history.pushState({ [stateKey]: true }, '');

    const handlePopState = (event: PopStateEvent) => {
      // Intercept back button and call the custom handler
      onBack();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isActive, onBack, priorityKey]);
}
