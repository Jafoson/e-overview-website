import styles from "./Register.module.scss";
import {theme} from "../../helper/variables.tsx";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import {useContext, useState} from "react";
import TextButton from "../../components/buttons/Buttons.tsx";
import {PasswordInput, TextInput} from "../../components/Inputs/TextInput.tsx";
import {OtherLoginButton} from "../../components/buttons/OtherLoginButton.tsx";
import {
    emailValidation,
    identicalPasswordsValidation,
    usernameValidation
} from "../../helper/validateUtil.tsx";
import {alertContext, AlertType} from "../../contexts/AlertContext.tsx";
import {IconButton} from "../../components/buttons/IconButton.tsx";
import {IResponseRegister, registerResponse} from "../../assets/response/registerResponse.ts";

export default function Register() {
    const getAlertContext = useContext(alertContext);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);}

    const [formData, setFormData] = useState<IResponseRegister>({
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    });

    const [validateData, setValidateData] = useState({
        emailErrors: [] as string[],
        passwordErrors: [] as string[],
        repeatPasswordErrors: [] as string[],
        userErrors: [] as string[],
    })

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

            // const passwordErrors = passwordValidation(formData.password);
            // setValidateData({...validateData, passwordErrors: passwordErrors});

    };

    // Handler für das Formular-Submit
    const handleSubmit =  async (e: { preventDefault: () => void; }) => {

        e.preventDefault();
        const passwordValidateResults = identicalPasswordsValidation(formData.password, formData.repeatPassword)
        const emailValidateResults = emailValidation(formData.email)
        const usernameValidateResults = usernameValidation(formData.username)

        if (passwordValidateResults.passwordErrors.length === 0 && emailValidateResults.length === 0 && usernameValidateResults.length === 0) {
            try {
                const response = await registerResponse(formData)
                getAlertContext.alertShow({type: response.status, message: response.message})

                if (response.status == AlertType.Success){
                    navigate("/")
                }
            } catch (error) {
                getAlertContext.alertShow({type: AlertType.Error, message: error})
            }
        } else {
            setValidateData({
                passwordErrors: passwordValidateResults.passwordErrors,
                repeatPasswordErrors: passwordValidateResults.repeatPasswordErrors,
                userErrors: usernameValidateResults,
                emailErrors: emailValidateResults
            })

            getAlertContext.alertShow({type: AlertType.Error, message: "invalid register data"})
        }

    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.logoWrapper}>
                            <IconButton icon={"ep:arrow-left-bold"} onClick={goBack} size={24}/>
                            <img  src={logo} alt={"TournamentFox Logo"} className={theme({styles: styles, name: "logo"})}/>
                            <div style={{width: "1px"}}/>
                        </div>
                        <div className={theme({styles: styles, name: "titleWrapper"})}>
                            <h1>
                                Sign up Summoner!
                            </h1>
                            <h2>
                                Register to get into battle
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.formWrapper}>
                            <TextInput id={"username"} name={"username"} value={formData.username} onChange={handleInputChange} label={"Username"} placeholder={"Jane Doe..."} failure={!(validateData.userErrors.length === 0)} errorsMessages={validateData.userErrors}/>
                            <TextInput id={"email"} name={"email"} value={formData.email} onChange={handleInputChange} label={"Email"} placeholder={"jdoe@example.com"} failure={!(validateData.emailErrors.length === 0)} errorsMessages={validateData.emailErrors}/>
                            <PasswordInput id={"password"} name={"password"} value={formData.password} onChange={handleInputChange} label={"Password"} placeholder={"min. 8 chars and 0-9 + A-Z + a-z + !-@%&"} failure={!(validateData.passwordErrors.length === 0)} errorsMessages={validateData.passwordErrors}/>
                            <PasswordInput id={"password"} name={"repeatPassword"} value={formData.repeatPassword} onChange={handleInputChange} label={"Repeat Password"} placeholder={"min. 8 chars and 0-9 + A-Z + a-z + !-@%&"} failure={!(validateData.repeatPasswordErrors.length === 0)} errorsMessages={validateData.repeatPasswordErrors}/>
                            <div className={styles.loginButtonsWrapper}>
                                <TextButton content={"Register"} primary={true} onClick={()=>{}}/>
                                <div className={theme({styles: styles, name: "or"})}>Or, Login with</div>
                                <div className={styles.otherLoginsWrapper}>
                                    <OtherLoginButton icon={"flat-color-icons:google"} label={"SignUp with Google"}/>
                                    <OtherLoginButton icon={"logos:twitch"} label={"SignUp with Twitch"}/>
                                    <OtherLoginButton icon={"ri:apple-fill"} label={"SignUp with Apple"}/>
                                </div>

                            </div>
                        </form>


                    </div>

                </div>
                <div className={theme({styles: styles, name: "previewWrapper"})}>

                </div>
            </div>

        </div>
    )
}


