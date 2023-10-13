import {createContext, useRef, useState} from "react";
import {Alert} from "../components/alerts/Alert.tsx";

export const alertContext = createContext<any>(null);

export enum AlertType {
    Error = "Error",
    Success = "Success",
    Warning = "Warning",
    Info = "Info",
}

export interface IAlert {
    type: AlertType;
    message: string;
    duration?: number;
}

export interface IAlertComponent{
    type: AlertType;
    message: string
}

export default function AlertProvider({ children }: any) {

    const [isAlertShow, setAlertShowStatus] = useState<boolean>(false)
    const [alertData, setAlertData] = useState<IAlertComponent>({
        type: AlertType.Error,
        message: "",
    });

    const timeoutRef = useRef<number | null>(null); // Hier wird die Timeout-Referenz gespeichert

    function alertShow({ type, message, duration = 6750 }: IAlert) {
        setAlertData({
            type,
            message,
        });
        setAlertShowStatus(true);

        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setAlertShowStatus(false);
        }, duration);
    }


    return (
        <alertContext.Provider value={{alertShow, setAlertShowStatus}}>
            {isAlertShow?  <Alert type={alertData.type} message={alertData.message}/>: null}
            {children}
        </alertContext.Provider>
    );
}