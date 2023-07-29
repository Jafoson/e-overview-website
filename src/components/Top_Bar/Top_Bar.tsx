import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Top_Bar.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { titleContext } from "../../contexts/TitleContext";

export default function Top_Bar() {
  const getTitleContext = useContext(titleContext);
  const getThemeContext = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <h1
        className={`${styles.title} ${
          getThemeContext.theme === "light" ? styles["light"] : ""
        }`}
      >
        {getTitleContext.title}
      </h1>
      <div className={styles.content}>
        <Icon
          className={`${styles.icon} ${
            getThemeContext.theme === "light" ? styles["light"] : ""
          }`}
          onClick={() => {
            getThemeContext.switchTheme();
          }}
          icon={
            getThemeContext.theme === "dark"
              ? "clarity:sun-solid"
              : "clarity:moon-solid"
          }
        />
        <Icon
          className={`${styles.icon} ${
            getThemeContext.theme === "light" ? styles["light"] : ""
          }`}
          icon="mdi:bell"
        />
        <NavLink
          className={`${styles.profilname} ${
            getThemeContext.theme === "light" ? styles["light"] : ""
          }`}
          to={"/profil"}
        >
          Max Mustermann
        </NavLink>
        <img
          className={styles.image}
          src="https://cdn.discordapp.com/attachments/1127012315913527347/1133767425951805630/82e0af95-1e32-4a75-b7fa-e4c3f5dfa4b0.jpg"
          alt="Profilpicture"
        />
      </div>
    </div>
  );
}
