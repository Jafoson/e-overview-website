import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Searchbar.module.scss";
import { theme } from "../../../helper/variables";

export default function Nav_Bar_searchbar() {
  return (
    <div className={theme({ styles: styles, name: "searchbar" })}>
      <div>
        <Icon className={styles.search_icon} icon="material-symbols:search" />
        <input className={styles.search_textfield} placeholder="Search..." />
      </div>
    </div>
  );
}
