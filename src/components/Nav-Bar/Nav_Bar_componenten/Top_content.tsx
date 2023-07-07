import React from "react";
import { Icon } from "@iconify/react";
import styles from "./Top_content.module.scss";
import useScreenWidthDetector from "../../../hook/useScreenWidthDetector";

export default function Nav_Bar_top_content() {
  const screenWidth = useScreenWidthDetector();

  return (
    <div className={styles.top_bar_container}>
      <h1>E-Overview</h1>
      <div>
        <Icon className={styles.Side_Bar_popup_icon} icon="quill:collapse" />
      </div>
    </div>
  );
}
