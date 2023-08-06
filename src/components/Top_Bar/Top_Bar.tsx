import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Top_Bar.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { titleContext } from "../../contexts/TitleContext";
import { theme } from "../helper/variables";

export default function Top_Bar() {
  const getTitleContext = useContext(titleContext);
  const getThemeContext = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <h1 className={theme({ styles: styles, name: "title" })}>
        {getTitleContext.title}
      </h1>
      <div className={styles.content}>
        <Icon
          className={theme({ styles: styles, name: "icon" })}
          onClick={() => {
            getThemeContext.switchTheme();
          }}
          icon={
            getThemeContext.theme === "light"
              ? "clarity:sun-solid"
              : "clarity:moon-solid"
          }
        />
        <Icon
          className={theme({ styles: styles, name: "icon" })}
          icon="mdi:bell"
        />
        <NavLink
          className={theme({ styles: styles, name: "profilname" })}
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
