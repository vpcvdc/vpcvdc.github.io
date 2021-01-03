import { lazy, memo, Suspense, unstable_SuspenseList as SuspenseList } from 'react';

const Header = lazy(() => import('./Header'));
const Section = lazy(() => import('./Section'));

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
  return (
    <main className="min-h-screen flex flex-col">
      <SuspenseList revealOrder="together">
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
