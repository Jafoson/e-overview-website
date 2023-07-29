import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import styles from "./Searchbar.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function Nav_Bar_searchbar() {
  const getThemeContext = useContext(ThemeContext);
  return (
    <div
      className={`${styles.searchbar} ${
        getThemeContext.theme === "light" ? styles["light"] : ""
      }`}
    >
      <div>
        <Icon className={styles.search_icon} icon="material-symbols:search" />
        <input className={styles.search_textfield} placeholder="Search..." />
      </div>
    </div>
  );
}
