import { createContext, useContext } from 'react';

const LocaleContext = createContext({
  locale: 'en',
  translations: { en: {} },
  switchLocale: () => { },
});

export default function LocaleContextProvider({ children, locale }) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export const useLocaleContext = () => useContext(LocaleContext);

export const LOCALES = Object.freeze({
  ta: Object.freeze({
    bcp47: 'ta',
    displayName: 'தமிழ்',
    englishName: 'Tamil',
    localeName: 'ta',
    rtl: false,
  }),
  en: Object.freeze({
    bcp47: 'en',
    displayName: 'English',
    englishName: 'English',
    localeName: 'en',
    rtl: false,
  }),
});
