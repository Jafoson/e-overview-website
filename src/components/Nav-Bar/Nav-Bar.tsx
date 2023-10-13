import { Outlet } from "react-router-dom";
import Nav_Bar_top_content from "./Nav_Bar_componenten/Top_content.tsx";
import Nav_Bar_searchbar from "./Nav_Bar_componenten/Searchbar.tsx";
import Nav_Bar_GroupBox from "./Nav_Bar_componenten/GroupBox.tsx";
import Nav_Link from "./Nav_Bar_componenten/Link.tsx";
// import Nav_Bar_profil from "./Nav_Bar_componenten/Profil.tsx";
// import Nav_Bar_Authentication from "./Nav_Bar_componenten/Authentication.tsx";
// import useScreenWidthDetector from "../../hook/useScreenWidthDetector.ts";
import styles from "./Nav-Bar.module.scss";

import Top_Bar from "../Top_Bar/Top_Bar.tsx";
import TitleProvider from "../../contexts/TitleContext.tsx";
import { theme } from "../../helper/variables.tsx";

export default function Nav_Bar() {
  // const screenWidth = useScreenWidthDetector();
  return (
    <TitleProvider>
      <div className={styles.content}>
        <div className={theme({ styles: styles, name: "Nav_Bar_container" })}>
          <Nav_Bar_top_content />
          <Nav_Bar_searchbar />
          <Nav_Bar_GroupBox />
          <Nav_Link
            path="/settings"
            icon="fluent:settings-24-regular"
            name="Settings"
            data={[
              { path: "/settings/account", name: "Your Account" },
              {
                path: "settings/security_and_account_access",
                name: "Security and Account access",
              },
            ]}
          />
          <div style={{ height: "16px" }} />
        </div>
        <div className={styles.content_container}>
          <Top_Bar />
          <div className={styles.content_wrapper}>
            <Outlet />
          </div>
        </div>
      </div>
    </TitleProvider>
  );
}
