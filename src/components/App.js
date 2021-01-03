import { memo } from 'react';
import ThemeContextProvider from '../contexts/ThemeContext';
import useTheme from '../hooks/useTheme';
import Main from './Main';

export default memo(function App() {
  const theme = useTheme();
  return (
    <ThemeContextProvider theme={theme}>
      <Main />
    </ThemeContextProvider>
  );
});
