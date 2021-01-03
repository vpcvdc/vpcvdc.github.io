import { memo } from 'react';
import { isDarkTheme, useThemeContext } from '../contexts/ThemeContext';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';

export default memo(function SwitchTheme() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      type='button'
      aria-label={`${isDarkTheme(theme) ? 'Activate light theme' : 'Activate dark theme'}`}
      onClick={toggleTheme}
    >
      {isDarkTheme(theme) ? <Sun className="h-6 pointer-events-none" /> : <Moon className="h-6 pointer-events-none" />}
    </button>
  );
});
