import { lazy, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = lazy(() => import('./App'));

export default memo(function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
});
