import {useState} from "react";

export interface ICheckbox{
    label?: string
    id: string
    name: string
    value: string
}

export function Checkbox({label, id, name, value}: ICheckbox) {
        const [isChecked, setIsChecked] = useState(false);

        const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
        };

    return (
        <div>
            <label htmlFor={"checkbox"}>{label}</label>
            <input type={"checkbox"} id={id} value={value} name={name} checked={isChecked} onChange={handleCheckboxChange}/>
        </div>
    );
}