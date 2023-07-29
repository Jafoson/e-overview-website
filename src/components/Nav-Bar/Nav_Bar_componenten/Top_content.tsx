import { useContext } from "react";
import { Icon } from "@iconify/react";
import styles from "./Top_content.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import logo from "../../../assets/Logo/TournFox_Logo_25072023.svg";
import largeLogo from "../../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import useScreenWidthDetector from "../../../hook/useScreenWidthDetector";

export default function Nav_Bar_top_content() {
  const getThemeContext = useContext(ThemeContext);
  const screenWidth = useScreenWidthDetector();

  return (
    <div
      className={`${styles.top_content_container} ${
        getThemeContext.theme === "light" ? styles["light"] : ""
      }`}
    >
      <img
        src={`${screenWidth > 1024 ? largeLogo : logo}`}
        alt="TournamentFox Logo"
        className={styles.logo}
      ></img>
      <div>
        <Icon className={styles.Side_Bar_popup_icon} icon="quill:collapse" />
      </div>
    </div>
  );
}
