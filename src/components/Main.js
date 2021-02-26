import {
  lazy,
  memo,
  Suspense,
  unstable_SuspenseList as SuspenseList,
  useState,
} from "react";
import Speakerphone from "../icons/Speakerphone";
import X from "../icons/X";

const Header = lazy(() => import("./Header"));
const Section = lazy(() => import("./Section"));

const HeaderGlimmer = memo(function HeaderGlimmer() {
  return (
    <div className="animate-pulse space-x-4 p-4 inline-flex items-center justify-end">
      <div className="bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full" />
      <div className="bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full" />
      <div className="bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full" />
    </div>
  );
});

const SectionGlimmer = memo(function SectionGlimmer() {
  return (
    <div className="animate-pulse p-4 flex-grow flex items-center justify-center">
      <div className="w-full mx-auto max-w-xl sm:flex border border-gray-400 dark:border-gray-600 rounded-xl p-8 sm:p-0 overflow-hidden">
        <div className="bg-gray-400 dark:bg-gray-600 w-32 h-32 sm:w-96 sm:h-auto sm:rounded-none rounded-full mx-auto" />
        <div className="pt-6 sm:p-8 flex flex-col items-center sm:items-start space-y-6">
          <div className="bg-gray-400 dark:bg-gray-600 w-80 max-w-full h-4" />
          <div className="bg-gray-400 dark:bg-gray-600 w-60 max-w-full h-4" />
          <div className="bg-gray-400 dark:bg-gray-600 w-40 max-w-full h-4" />
        </div>
      </div>
    </div>
  );
});

export default memo(function Main() {
  const [isBannerOpen, setIsBannerOpen] = useState(() => true);
  return (
    <main className="min-h-screen flex flex-col">
      <SuspenseList revealOrder="together">
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
                  <button
                    onClick={() => setIsBannerOpen(false)}
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <Suspense fallback={<HeaderGlimmer />}>
          <Header />
        </Suspense>
        <Suspense fallback={<SectionGlimmer />}>
          <Section />
        </Suspense>
      </SuspenseList>
    </main>
  );
});
