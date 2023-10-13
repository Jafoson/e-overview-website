import {useState} from "react";
import styles from "./Checkbox.module.scss";
import {theme} from "../../helper/variables.tsx";

export interface ICheckbox{
    label?: string
    value: string
}

export function Checkbox({label, value}: ICheckbox) {
        const [isChecked, setIsChecked] = useState(false);

        const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
        };

    return (
        <div className={theme({styles: styles, name: "container"})}>
            <input type={"checkbox"} value={value} checked={isChecked} onChange={handleCheckboxChange}/>
            <label htmlFor={"checkbox"}>{label}</label>
        </div>
    );
}