import {setCookie} from "typescript-cookie";

export interface IResponseRegister{
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export async function registerResponse(fetchData: IResponseRegister){
    try {
        const response = await fetch("http://127.0.0.1:8000/web/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(fetchData),
        });
        const responseData = await response.json();


        if (response.status === 200){
            const accessToken = responseData.access_token;
            const refreshToken = responseData.refresh_token;

            setCookie('refresh_token', refreshToken, { expires: 365, secure: true,} );
            setCookie('access_token', accessToken, { expires: 1 / 48, secure: true,} );// Gültig für 30 Minuten (1/48 von einem Tag)
            return{status: "Success", message: responseData.message, modul: "default"}
        }
        else if(response.status === 400){
            return{status: "Error", message: responseData.detail.message, modul: responseData.detail.modul}
        }
        else{
            return{status: "Error", message: "unknown error", modul: "default"
            }


    }}catch(error){
        return{status: "Error", message: error, modul: "default"}
    }
}


export interface IResponseLogin {
    username: string;
    password: string;
}

export async function loginResponse(fetchData: IResponseLogin) {
    try {
        const apiUrl = 'http://127.0.0.1:8000'; // Ihr Backend-API-URL hier

        const response = await fetch(`${apiUrl}/web/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // @ts-ignore
            body: new URLSearchParams(fetchData),
        });

        if (response.status === 200) {
            const data = await response.json();
            const accessToken = data.access_token;
            const refreshToken = data.refresh_token;

            setCookie('refresh_token', refreshToken, { expires: 365, secure: true,}, );
            setCookie('access_token', accessToken, { expires: 1 / 48, secure: true,}, );
            return { status: 'Success', message: `Login successful`};
        } else if (response.status === 400) {
            const data = await response.json();
            console.log(data.detail)
            return { status: 'Error', message: data.detail.message, modul: data.detail.modul };
        }
        else if (response.status === 404) {
            const data = await response.json();
            return { status: 'Error', message: data.detail.message, modul: data.detail.modul };}
        else {
            return { status: 'Error', message: 'Unbekannter Fehler', modul: 'default' };
        }
    } catch (error) {
        return { status: 'Error', message: error, modul: 'default' };
    }
}
