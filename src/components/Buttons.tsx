import React, { MouseEventHandler, useContext } from "react";
import styles from "./buttons.module.scss";
import { ThemeContext } from "../contexts/ThemeContext";

interface ITextButton {
  color?: string;
  primary?: boolean;
  content: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
}

export default function TextButton({
  color,
  primary = true,
  content,
  onClick,
  style,
}: ITextButton) {
  const buttonStyle = {
    ...style,
    backgroundColor: color, // Hier wird die Hintergrundfarbe auf das color-Prop gesetzt
  };

  const getThemeContext = useContext(ThemeContext);

  return (
    <div
      style={buttonStyle}
      className={
        primary
          ? `${styles.primary_TextButton} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
          : `${styles.TextButton} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
      }
      onClick={onClick}
    >
      {content}
    </div>
  );
}
