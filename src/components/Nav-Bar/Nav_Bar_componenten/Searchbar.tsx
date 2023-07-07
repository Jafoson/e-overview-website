import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import styles from "./Searchbar.module.scss";

export default function Nav_Bar_searchbar() {
  return (
    <div className={styles.searchbar}>
      <div>
        <Icon className={styles.search_icon} icon="material-symbols:search" />
        <input className={styles.search_textfield} placeholder="Search..." />
      </div>
    </div>
  );
}
