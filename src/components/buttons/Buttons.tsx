import React, { MouseEventHandler } from "react";
import styles from "./buttons.module.scss";
import { theme } from "../../helper/variables.tsx";

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
      <button
          onClick={onClick}
          style={buttonStyle}
          className={
              `${styles["TextButton"]}
                ${primary
                  ? theme({styles: styles, name: "primary"})
                  : theme({styles: styles, name: "secondary"})}
                `}
      >
          <p className={styles.text}>{content}</p>
      </button>
  );
}

export function SmallTextButton({color, primary = true, content, onClick, style}: ITextButton) {
    const buttonStyle = {
        ...style,
        backgroundColor: color,
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            className={
                `${styles["smallTextButton"]}
                ${primary
                    ? theme({styles: styles, name: "primary"})
                    : theme({styles: styles, name: "secondary"})}
                `}
        >
            <p className={styles.text}>{content}</p>
        </button>
    );
}
