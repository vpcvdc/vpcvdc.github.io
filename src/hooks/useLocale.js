import { useCallback, useEffect, useState } from 'react';
import { LOCALES } from '../contexts/LocaleContext';

export default function useLocale() {
  const switchLocale = useCallback(async language => {
    const found = Object.values(LOCALES).find(locale => locale.bcp47.toLowerCase() === language.toLowerCase());
    const locale = found?.localeName ?? 'en';
    const translations = (locale === 'en') ? ({ en: {} }) : await import(`../locales/${locale}.json`)
    setState(state => ({
      ...state,
      context: {
        ...state.context,
        locale,
      },
      translations,
    }));
  }, []);
  const setContext = useCallback(async context => {
    setState(state => ({
      ...state,
      context: {
        ...state.context,
        context,
      },
    }));
  }, []);
  const [state, setState] = useState(() => ({
    context: {
      locale: 'en',
    },
    translations: { en: {} },
    switchLocale,
    setContext,
  }));
  useEffect(() => {
    (async function init() {
      const language = window.navigator?.language?.toLowerCase() ?? 'en';
      await switchLocale(language);
    })();
  }, [switchLocale]);
  useEffect(() => {
    const html = document.documentElement;
    const locale = LOCALES[state.context.locale];
    html.lang = locale.bcp47;
    html.dir = locale.rtl ? 'rtl' : 'ltr';
  }, [state.context.locale]);
  return state;
}
