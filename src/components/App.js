import { memo, useState } from 'react';
import { init } from 'fbt';
import ThemeContextProvider from '../contexts/ThemeContext';
import LocaleContextProvider from '../contexts/LocaleContext';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import Main from './Main';
import Speakerphone from '../icons/Speakerphone';
import X from '../icons/X';

export default memo(function App() {
  const [isBannerOpen, setIsBannerOpen] = useState(() => true);
  const theme = useTheme();
  const locale = useLocale();
  init({
    translations: locale.translations,
    hooks: {
      getViewerContext: () => locale.context,
    },
  });
  return (
    <ThemeContextProvider theme={theme}>
      <LocaleContextProvider locale={locale}>
        {isBannerOpen ? (
          <div className="bg-blue-600 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-blue-800 dark:bg-black">
                    <Speakerphone className="h-6 w-6 text-white" />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      We announced a new product!
                  </span>
                    <span className="hidden md:inline">
                      Big news! We're excited to announce a brand new product.
                  </span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <a
                    href="//allyweds.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 dark:text-white dark:bg-gray-900 dark:hover:bg-black"
                  >
                    Visit now
                </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button onClick={() => setIsBannerOpen(false)} type="button" className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                    <span className="sr-only">Dismiss</span>
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <Main />
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
});
