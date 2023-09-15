import styles from "./Small_Panel.module.scss";
import { theme } from "../helper/variables";

export default function Small_Panel() {
  return (
    <div className={styles.wrapper}>
      <div className={theme({ styles: styles, name: "container" })}>
        <img
          className={styles.image}
          src="https://media.discordapp.net/attachments/1134234924170358864/1139601790480949390/image.png?width=340&height=340"
         alt={"idk"}></img>
        <div className={theme({ styles: styles, name: "title" })}>
          {" "}
          Prime League
        </div>
      </div>
    </div>
  );
}
