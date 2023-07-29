import { useContext } from "react";
import styles from "./Profil.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function Nav_Bar_profil() {
  const getThemeContext = useContext(ThemeContext);
  return (
    <div
      className={`${styles.Nav_Bar_profil_container} ${
        getThemeContext.theme === "light" ? styles["light"] : ""
      }`}
    >
      <img
        src="https://cdn.discordapp.com/attachments/1098012388218900592/1117621872788516914/d29f4527-27b3-4a31-b0c4-e1666cf47fd9.jpg"
        className={styles.Nav_Bar_profil_pictures}
      />
      <div className={styles.Nav_Bar_profil_data}>
        <a className={styles.Nav_Bar_username}>Max Mustermann</a>
        <a className={styles.Nav_Bar_nickname}>@testman</a>
      </div>
    </div>
  );
}
