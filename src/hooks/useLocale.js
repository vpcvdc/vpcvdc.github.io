import { useCallback, useEffect, useState } from 'react';
import { LOCALES } from '../contexts/LocaleContext';

export default function useLocale() {
  const switchLocale = useCallback(async locale => {
    const translations = (locale === 'en') ? ({ en: {} }) : await import(`../locales/${locale}.json`)
    setState(state => ({
      ...state,
      locale,
      translations,
    }));
  }, []);
  const [state, setState] = useState(() => ({
    locale: 'en',
    translations: { en: {} },
    switchLocale,
  }));
  useEffect(() => {
    async function init() {
      const language = window.navigator?.language?.toLowerCase() ?? 'en';
      const found = Object.values(LOCALES).find(locale => locale.bcp47.toLowerCase() === language);
      const locale = found?.localeName ?? 'en';
      await switchLocale(locale);
    }
    init();
  }, [switchLocale]);
  useEffect(() => {
    const html = document.documentElement;
    const locale = LOCALES[state.locale];
    html.lang = locale.bcp47;
    if (locale.rtl) {
      html.dir = 'rtl';
    } else {
      html.dir = 'ltr';
    }
  }, [state.locale]);
  return state;
}
