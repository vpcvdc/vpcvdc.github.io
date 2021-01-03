import { useState, useEffect } from 'react';
import { isDarkTheme } from '../contexts/ThemeContext';

export default function useTheme() {
  const darkMedia = '(prefers-color-scheme: dark)';
  const lightMedia = '(prefers-color-scheme: light)';
  const [state, setState] = useState(() => {
    const isDarkMode = window.matchMedia?.(darkMedia)?.matches;
    const isLightMode = window.matchMedia?.(lightMedia)?.matches;
    let theme;
    if (isDarkMode) {
      theme = 'dark';
    } else if (isLightMode) {
      theme = 'light';
    } else {
      const hours = new Date().getHours();
      theme = hours >= 18 || hours < 6 ? 'dark' : 'light';
    }
    return {
      theme,
      toggleTheme() {
        setState(state => ({
          ...state,
          theme: isDarkTheme(state.theme) ? 'light' : 'dark',
        }));
      },
    };
  });
  useEffect(() => {
    let isMounted = true;
    const activateMode = theme => event =>
      event?.matches && isMounted
        ? setState(state => ({ ...state, theme }))
        : null;
    const darkScheme = window.matchMedia?.(darkMedia);
    const lightScheme = window.matchMedia?.(lightMedia);
    darkScheme?.addEventListener?.('change', activateMode('dark'), false) ??
      darkScheme?.addListener?.(activateMode('dark'));
    lightScheme?.addEventListener?.('change', activateMode('light'), false) ??
      lightScheme?.addListener?.(activateMode('light'));
    return () => {
      isMounted = false;
      darkScheme?.removeEventListener?.('change', activateMode('dark'), false) ??
        darkScheme?.removeListener?.(activateMode('dark'));
      lightScheme?.removeEventListener?.('change', activateMode('light'), false) ??
        lightScheme?.removeListener?.(activateMode('light'));
    };
  }, []);
  useEffect(() => {
    const {
      document: {
        documentElement: { classList },
      },
    } = window;
    classList.toggle('dark', isDarkTheme(state.theme));
  }, [state.theme]);
  return state;
}
