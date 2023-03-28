import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  console.log(theme);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      //SET THEME IN LOCALSTORAGE
      //window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      //SET THEME IN LOCALSTORAGE
      //window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    /* DETECTS BROWSER THEME
      const localTheme = window.localStorage.getItem("theme");
  
      if (localTheme) {
        setTheme(localTheme);
      } else {
        window.localStorage.setItem("theme", "light");
      } */
  });

  return [theme, toggleTheme];
};
