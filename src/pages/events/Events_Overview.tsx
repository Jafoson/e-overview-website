import { useContext } from "react";
import "./Events_Overview.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Events_Overview() {
  const getThemeContext = useContext(ThemeContext);
  return (
    <div>
      <h1>
        Event-Overview
        {getThemeContext.theme}
      </h1>
    </div>
  );
}
