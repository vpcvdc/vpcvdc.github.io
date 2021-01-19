import { memo, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorUI from './ErrorUI';
import Loader from './Loader';
import Router from './Router';

export default memo(function Root() {
  return (
    <ErrorBoundary fallback={(error, retry) => <ErrorUI error={error} retry={retry} />}>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
});
