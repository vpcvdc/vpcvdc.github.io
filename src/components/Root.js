import { lazy, memo, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorUI from './ErrorUI';
import Loader from './Loader';

const App = lazy(() => import('./App'));

export default memo(function Root() {
  return (
    <ErrorBoundary fallback={(error, retry) => <ErrorUI error={error} retry={retry} />}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  );
});
