import { memo } from "react";
import { init } from "fbt";
import ThemeContextProvider from "../contexts/ThemeContext";
import LocaleContextProvider from "../contexts/LocaleContext";
import useTheme from "../hooks/useTheme";
import useLocale from "../hooks/useLocale";
import Main from "./Main";

export default memo(function App() {
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
        <Main />
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
});
