import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.tsx";

interface ITheme {
  styles: CSSModuleClasses;
  name: string;
}

export function theme({ styles, name }: ITheme) {
  const getThemeContext = useContext(ThemeContext);
  return `${styles[name]} ${
    getThemeContext.theme === "light" ? styles["light"] : ""
  }`;
}
