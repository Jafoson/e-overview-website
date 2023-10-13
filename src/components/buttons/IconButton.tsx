import styles from "./IconButton.module.scss";
import {Icon} from "@iconify/react/dist/iconify.js";
import {MouseEventHandler} from "react";
import {theme} from "../../helper/variables.tsx";

export interface IIconButton{
    icon: string,
    onClick:  MouseEventHandler<HTMLButtonElement>
    size?: number
}

export function IconButton({icon, onClick, size = 24}: IIconButton) {
    const fontSize = `${size}px`

    return (
        <button  style={{fontSize: fontSize}} tabIndex={0} onClick={onClick} className={theme({styles: styles, name: "container"})}>
            <Icon icon={icon}/>
        </button>
    );
}