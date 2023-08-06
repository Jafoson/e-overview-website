import React, { MouseEventHandler } from "react";
import styles from "./buttons.module.scss";
import { theme } from "./helper/variables";

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

  return (
    <div
      style={buttonStyle}
      className={
        primary
          ? theme({ styles: styles, name: "primary_TextButton" })
          : theme({ styles: styles, name: "TextButton" })
      }
      onClick={onClick}
    >
      {content}
    </div>
  );
}
