import styles from "./Login.module.scss";
import { theme } from "../../helper/variables.tsx";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import { useContext, useState } from "react";
import TextButton from "../../components/buttons/Buttons.tsx";
import {
  PasswordInput,
  TextInput,
} from "../../components/Inputs/TextInput.tsx";
import { Checkbox } from "../../components/Inputs/Checkbox.tsx";
import { OtherLoginButton } from "../../components/buttons/OtherLoginButton.tsx";
import { loginValidation } from "../../helper/validateUtil.tsx";
import { alertContext, AlertType } from "../../contexts/AlertContext.tsx";
import { IconButton } from "../../components/buttons/IconButton.tsx";
import { loginResponse } from "../../assets/response/registerResponse.ts";

export default function Login() {
  const getAlertContext = useContext(alertContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validateData, setValidateData] = useState({
    passwordErrors: [] as string[],
    userErrors: [] as string[],
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler für das Formular-Submit
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validationResults = loginValidation(
      formData.username,
      formData.password
    );

    if (
      validationResults.usersErrors.length === 0 &&
      validationResults.passwordErrors.length === 0
    ) {
      try {
        const response = await loginResponse(formData);
        getAlertContext.alertShow({
          type: response.status,
          message: response.message,
        });

        if (response.status == AlertType.Success) {
          navigate("/");
        }
      } catch (error) {
        getAlertContext.alertShow({ type: AlertType.Error, message: error });
      }
    } else {
      getAlertContext.alertShow({
        type: AlertType.Error,
        message: "invalid login data",
      });
    }

    setValidateData({
      userErrors: validationResults.usersErrors,
      passwordErrors: validationResults.passwordErrors,
    });
  };

  return (
    <div className={styles.wrapper}>
      {/*<Alert type={"Success"} message={"hallo World!"}/>*/}
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.logoWrapper}>
              <IconButton
                icon={"ep:arrow-left-bold"}
                onClick={goBack}
                size={24}
              />
              <img
                src={logo}
                alt={"TournamentFox Logo"}
                className={theme({ styles: styles, name: "logo" })}
              />
              <div style={{ width: "1px" }} />
            </div>
            <div className={theme({ styles: styles, name: "titleWrapper" })}>
              <h1>Welcome back Summoner!</h1>
              <h2>Log in to get back to the battlefield</h2>
            </div>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
              <TextInput
                id={"username"}
                name={"username"}
                value={formData.username}
                onChange={handleInputChange}
                label={"Email/ Username"}
                placeholder={"jdoe@example.com / Jane Doe..."}
                failure={!(validateData.userErrors.length === 0)}
                errorsMessages={validateData.userErrors}
              />
              <PasswordInput
                id={"password"}
                name={"password"}
                value={formData.password}
                onChange={handleInputChange}
                label={"Password"}
                placeholder={"min. 8 chars and 0-9 + A-Z + a-z + !-@%&"}
                failure={!(validateData.passwordErrors.length === 0)}
                errorsMessages={validateData.passwordErrors}
              />
              <div className={styles.rememberWrapper}>
                <Checkbox value={""} label={"remember me"} />
                <a tabIndex={0} className={styles.link}>
                  Forget Password?
                </a>
              </div>
              <div className={styles.loginButtonsWrapper}>
                <TextButton
                  content={"Log In"}
                  primary={true}
                  onClick={() => {}}
                />
                <div className={theme({ styles: styles, name: "or" })}>
                  Or, Login with
                </div>
                <div className={styles.otherLoginsWrapper}>
                  <OtherLoginButton
                    icon={"flat-color-icons:google"}
                    label={"LogIn with Google"}
                  />
                  <OtherLoginButton
                    icon={"logos:twitch"}
                    label={"LogIn with Twitch"}
                  />
                  <OtherLoginButton
                    icon={"ri:apple-fill"}
                    label={"LogIn with Apple"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className={theme({ styles: styles, name: "previewWrapper" })}
        ></div>
      </div>
    </div>
  );
}
