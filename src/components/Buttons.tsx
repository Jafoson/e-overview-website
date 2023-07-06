import React, { MouseEventHandler } from "react";
import "./buttons.scss";

interface ITextButton {
  primary?: boolean;
  content: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
}

export default function TextButton({
  primary = true,
  content,
  onClick,
  style,
  className,
}: ITextButton) {
  return (
    <div
      style={style}
      className={
        primary ? `primary_TextButton ${className}` : `TextButton ${className}`
      }
      onClick={onClick}
    >
      {content}
    </div>
  );
}
