import {ChangeEventHandler, useState} from "react";
import styles from "./TextInput.module.scss";
import {theme} from "../helper/variables.tsx";
import {Icon} from "@iconify/react/dist/iconify.js";

export interface ITextInput{
    label?: string
    id: string
    name: string
    placeholder?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    success: boolean;
    failure: boolean
}

export function TextInput({label, id, name, placeholder, value, onChange, success = false, failure = false}:ITextInput) {
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
        </div>
    );
}

export function PasswordInput({label, id, name, placeholder, value, onChange,  success = false, failure = false}:ITextInput) {
    const [isPasswordVisible, setPasswortVisible] = useState(true)

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
                <button className={theme({styles: styles, name: "icon"})} onClick={() => setPasswortVisible(!isPasswordVisible)}>
                    <Icon   icon={isPasswordVisible? "mdi:eye": "mdi:eye-off"}  />
                </button>

            </div>
        </div>
    );
}