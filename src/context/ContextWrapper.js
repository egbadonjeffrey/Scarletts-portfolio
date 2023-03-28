import { useState, createContext, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../components/Themes";
import { ThemeProvider } from "styled-components";

export const DarkModeContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // prevent scroll when menu in display
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menu]);

  // screen width watcher
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  console.log(width);

  // toggle menu function
  function toggleMenu() {
    setMenu((menu) => !menu);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <DarkModeContext.Provider
        value={{
          theme,
          menu,
          width,
          toggleTheme,
          toggleMenu,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};
