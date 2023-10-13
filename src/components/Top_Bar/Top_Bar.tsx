import styles from "./Top_Bar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { titleContext } from "../../contexts/TitleContext";
import { theme } from "../../helper/variables";
import { alertContext, AlertType } from "../../contexts/AlertContext.tsx";
import { SmallTextButton } from "../buttons/Buttons.tsx";
import { IconButton } from "../buttons/IconButton.tsx";

export default function Top_Bar() {
  const getTitleContext = useContext(titleContext);
  const getThemeContext = useContext(ThemeContext);
  const getAlertContext = useContext(alertContext);
  let isLogin: boolean = false;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={theme({ styles: styles, name: "title" })}>
        {getTitleContext.title}
      </h1>
      <div className={styles.content}>
        {isLogin ? (
          <SmallTextButton
            content={"+ Erstellen"}
            primary={true}
            onClick={() => {}}
          />
        ) : null}
        <div style={{ width: "6px" }} />
        <IconButton
          icon={
            getThemeContext.theme === "light"
              ? "clarity:sun-solid"
              : "clarity:moon-solid"
          }
          onClick={() => {
            getThemeContext.switchTheme();
          }}
        />
        {isLogin ? (
          <>
            <IconButton
              icon="mdi:bell"
              onClick={() => {
                getAlertContext.alertShow({
                  type: AlertType.Info,
                  message:
                    "Hallo ich bin ein Alert und mal schauen wie sich dies aussieht, ich hoffe es wird gut aber mal schauen",
                  duration: 7750,
                });
              }}
            />
            <NavLink
              className={theme({ styles: styles, name: "profilname" })}
              to={"/auth/mail/verify"}
            >
              Max Mustermann
            </NavLink>
            <img
              className={styles.image}
              src="https://cdn.discordapp.com/attachments/1127012315913527347/1133767425951805630/82e0af95-1e32-4a75-b7fa-e4c3f5dfa4b0.jpg"
              alt="Profilpicture"
            />{" "}
          </>
        ) : (
          <div className={styles.registerWrapper}>
            <SmallTextButton
              content={"Login"}
              onClick={() => {
                navigate("/signin");
              }}
              primary={false}
            />
            <SmallTextButton
              content={"Register"}
              onClick={() => {
                navigate("/signup");
              }}
              primary={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
