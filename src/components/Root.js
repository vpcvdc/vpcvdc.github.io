import { lazy, memo, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import ErrorUI from './ErrorUI';
import Loader from './Loader';

const App = lazy(() => import('./App'));

export default memo(function Root() {
  return (
    <ErrorBoundary fallback={(error, retry) => <ErrorUI error={error} retry={retry} />}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path=':lang' element={<App />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
});
