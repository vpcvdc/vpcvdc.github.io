import { memo, useEffect } from 'react';
import { init } from 'fbt';
import { useSearchParams } from 'react-router-dom';
import ThemeContextProvider from '../contexts/ThemeContext';
import LocaleContextProvider, { LOCALES } from '../contexts/LocaleContext';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import Main from './Main';

export default memo(function App() {
  const [searchParams] = useSearchParams({ lang: 'en' });
  const lang = searchParams.get('lang')
  const theme = useTheme();
  const locale = useLocale();
  const { switchLocale } = locale;
  init({
    translations: locale.translations,
    hooks: {
      getViewerContext: () => locale.context,
    },
  });
  useEffect(() => {
    switchLocale(lang);
  }, [lang, switchLocale]);
  useEffect(() => {
    const alternates = Object.keys(LOCALES).filter(l => l !== 'en').map(key => {
      const { bcp47 } = LOCALES[key];
      const alternate = document.createElement('link');
      alternate.rel = 'alternate';
      alternate.href = `${process.env.REACT_APP_URL}/?lang=${bcp47}`;
      alternate.hreflang = bcp47;
      document.head.appendChild(alternate);
      return alternate;
    });
    return () => alternates.forEach(alternate => document.head.removeChild(alternate));
  }, []);
  return (
    <ThemeContextProvider theme={theme}>
      <LocaleContextProvider locale={locale}>
        <Main />
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
});
