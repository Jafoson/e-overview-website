import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [theme, settheme] = useState("light");

  function switchTheme() {
    if (theme == "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  }

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        settheme("dark");
      } else {
        settheme("light");
      }
    };

    handleChange(darkModeMediaQuery);

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
