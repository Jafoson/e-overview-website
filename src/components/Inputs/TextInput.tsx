import {ChangeEventHandler, useState} from "react";
import styles from "./TextInput.module.scss";
import {theme} from "../../helper/variables.tsx";
import {Icon} from "@iconify/react/dist/iconify.js";

export interface ITextInput{
    label?: string
    id: string
    name: string
    placeholder?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    errorsMessages?: string[]
    success?: boolean
    failure?: boolean
}

//FIXME no Error rendert fix this

export function TextInput({label, id, name, placeholder, value, onChange, success = false, failure = false, errorsMessages}:ITextInput) {

    const ErrorComponent = (errorMessages: string[])=>{
        if (errorMessages.length === 0){
            return <></>
        }
        return(<div className={styles.errorWrapper}>
            {errorMessages.map((errorMessage, index) => (
                <li className={styles.errorText} key={index}>{errorMessage}</li>
            ))}
        </div>);
    }


    return (
            <div className={styles.wrapper}>
                <label className={theme({styles: styles, name: "textInputLabel"})} htmlFor={name}>{label}</label>
                <div className={`${theme({styles: styles, name: "container"})} ${success? styles["success"]: ""} ${failure? styles["false"]: ""}`}>
                    <input
                        className={theme({styles: styles, name: "dInput"})}
                        type={"text"}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
                {ErrorComponent(errorsMessages || [])}
        </div>
    );
}

export function PasswordInput({label, id, name, placeholder, value, onChange,  success = false, failure = false, errorsMessages}:ITextInput) {
    const [isPasswordVisible, setPasswordVisible] = useState(true)

    const ErrorComponent = (errorMessages: string[])=>{
        if (errorMessages.length === 0){
            return <></>
        }
        return(<div className={styles.errorWrapper}>
            {errorMessages.map((errorMessage, index) => (
                <li className={styles.errorText} key={index}>{errorMessage}</li>
            ))}
        </div>);
    }




    return (
        <div className={styles.wrapper}>
            <label className={theme({styles: styles, name: "textInputLabel"})} htmlFor={name}>{label}</label>
            <div className={`${theme({styles: styles, name: "container"})} ${success? styles["success"]: ""} ${failure ? styles["false"]: ""}`}>
                <input
                    className={theme({styles: styles, name: "dInput"})}
                    type={isPasswordVisible ? "password": "text"}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <button  type="button" tabIndex={0} className={theme({styles: styles, name: "icon"})} onClick={() => setPasswordVisible(!isPasswordVisible)}>
                    <Icon   icon={isPasswordVisible? "mdi:eye": "mdi:eye-off"}  />
                </button>

            </div>
            {ErrorComponent(errorsMessages || [])}
        </div>
    );
}