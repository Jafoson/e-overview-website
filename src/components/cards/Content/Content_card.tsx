import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Content_card.module.scss";

import React from "react";
import { theme } from "../../../helper/variables";

interface IContentCard {
  icon: string;
  title: string;
}

export default function Content_card({ icon, title }: IContentCard) {
  return (
    <div className={styles.wrapper}>
      <div className={theme({ styles: styles, name: "container" })}>
        <Icon icon={icon} className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}
