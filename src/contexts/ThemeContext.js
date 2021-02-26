import { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children, theme }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);

export const isDarkTheme = (theme) => theme === "dark";
