import styles from "./Top_content.module.scss";
import logo from "../../../assets/Logo/TournFox_Logo_25072023.svg";
import largeLogo from "../../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import useScreenWidthDetector from "../../../hook/useScreenWidthDetector";
import { theme } from "../../helper/variables";

export default function Nav_Bar_top_content() {
  const screenWidth = useScreenWidthDetector();

  return (
    <div className={theme({ styles: styles, name: "top_content_container" })}>
      <img
        src={`${screenWidth > 1024 ? largeLogo : logo}`}
        alt="TournamentFox Logo"
        className={styles.logo}
      ></img>
    </div>
  );
}
