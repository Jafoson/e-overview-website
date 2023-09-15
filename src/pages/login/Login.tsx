import styles from "./Login.module.scss";
import {theme} from "../../components/helper/variables.tsx";
import {Icon} from "@iconify/react/dist/iconify.js";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/Logo/TournFox_LogowithFont_25072023.svg";
import {useState} from "react";
import TextButton from "../../components/Buttons.tsx";
import {PasswordInput, TextInput} from "../../components/Inputs/TextInput.tsx";
import {Checkbox} from "../../components/Inputs/Checkbox.tsx";

export default function Login() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);}

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [validateData, setValidateData] = useState({
        userFalse: false,
        userRight: false,
        passwordFalse: false,
        passwordRight: false,
    })

    // Handler für Eingabefeldänderungen
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handler für das Formular-Submit
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.logoWrapper}>
                        <a onClick={goBack}>                        <Icon className={theme({styles: styles, name: "backIcon"})} icon={"ep:arrow-left-bold"} />
                        </a>
                        <img src={logo} alt={"TournamentFox Logo"} className={theme({styles: styles, name: "logo"})}/>
                        <div style={{width: "1px"}}/>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.formWrapper}>
                       <TextInput id={"username"} name={"username"} value={formData.username} onChange={handleInputChange} label={"Email/ Username"} placeholder={"jdoe@example.com / Jane Doe..."} success={validateData.userRight} failure={validateData.userFalse}/>
                       <PasswordInput id={"password"} name={"password"} value={formData.password} onChange={handleInputChange} label={"Password"} placeholder={"min. 8 chars and 0-9 + A-Z + a-z + !-@%&"} success={validateData.passwordRight} failure={validateData.passwordFalse}/>
                        {/*<Checkbox />*/}
                        <TextButton content={"Log In"} primary={true} onClick={()=>{}}/>
                    </form>

                </div>

            </div>
            <div className={theme({styles: styles, name: "previewWrapper"})}>

            </div>
        </div>

    </div>)
}


