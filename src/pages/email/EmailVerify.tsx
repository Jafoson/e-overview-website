import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "../../components/buttons/IconButton";
import styles from "./EmailVerify.module.scss";
import logo from "../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import Content_card from "../../components/cards/Content/Content_card";
import TextButton from "../../components/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { censorEmail } from "../../helper/censorEmail";

export default function EmailVerify() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/home");
  };

  const mail = "jason.mund@gmx.de";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBarWrapper}>
          <IconButton icon="ep:arrow-left-bold" onClick={goBack} />
          <img src={logo} alt="TournamentFox Logo" className={styles.logo} />
          <IconButton icon="material-symbols:home" onClick={goHome} />
        </div>
        <Content_card
          icon="mingcute:mail-send-fill"
          title="Verify your Email"
        />
        <>
          <div style={{ width: "100%", textAlign: "center" }}>
            <span className={`${styles.font} ${styles.h2}`}>
              We will send you an email to
              <br />
            </span>
            <span className={`${styles.font} ${styles.mail}`}>
              {mail}
              <br />
              <br />
            </span>
            <span className={styles.font}>
              Simply click on the link in this email to complete your
              registration. <br /> If you do not see the email,{" "}
            </span>
            <span className={`${styles.font} ${styles.bold}`}>
              please check your spam folder.
            </span>
          </div>
        </>
        <div className={styles.buttonWrapper}>
          <TextButton content="Back to home" onClick={goHome} primary={false} />
          <TextButton
            content="Resend email"
            onClick={() => {
              censorEmail(mail);
            }}
            primary={true}
          />
        </div>
      </div>
    </div>
  );
}
