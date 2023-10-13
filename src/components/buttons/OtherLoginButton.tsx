import {Icon} from "@iconify/react/dist/iconify.js";
import styles from "./OtherLoginButton.module.scss";
import {theme} from "../../helper/variables.tsx";

export interface IOtherLoginButton{
    icon: string,
    label: string
}

export function OtherLoginButton({icon, label}: IOtherLoginButton) {
    return (
        <div className={styles.buttonWrapper}>
            <div className={theme({styles: styles, name: "container"})}>
                <Icon icon={icon} className={theme({styles: styles, name: "logo"})}/>
                <h1>{label}</h1>
            </div>
        </div>
    );
}