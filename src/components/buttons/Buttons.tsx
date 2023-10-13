import React, { MouseEventHandler } from "react";
import styles from "./buttons.module.scss";
import { theme } from "./helper/variables";

interface ITextButton {
  color?: string;
  primary?: boolean;
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
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
    backgroundColor: color,
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
          onClick={onClick}
          style={buttonStyle}
          className={
            primary
                ? theme({ styles: styles, name: "primary_TextButton" })
                : theme({ styles: styles, name: "TextButton" })
          }
      >
        <p className={styles.text}>{content}</p>
      </button>
    </div>
  );
}
