// Cookie.ts

export interface ISetCookie{
    name: string,
    value: string,
    expires: number,
    httpOnly?: boolean,
    secure?: boolean,
    path?: string
}

export function setCookie({name, value, expires = 0, httpOnly = false, secure = false, path = '/'}:ISetCookie) {
    let cookieString = `${name}=${encodeURIComponent(value)}`;

    if (expires > 0) {
        const expirationDate = new Date(Date.now() + expires * 24 * 60 * 60 * 1000);
        cookieString += `; expires=${expirationDate.toUTCString()}`;
    }

    cookieString += `; path=${path}`;

    if (httpOnly) {
        cookieString += `; HttpOnly`;
    }
    if (secure) {
        cookieString += `; Secure`;
    }

    document.cookie = cookieString;
}

export function getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

export function deleteCookie(name: string, path: string = '/') {
    const expirationDate = new Date(0); // Setzen Sie das Ablaufdatum auf die Vergangenheit, um das Cookie zu löschen
    const cookieString = `${name}=; expires=${expirationDate.toUTCString()}; path=${path}`;
    document.cookie = cookieString;
}

export function updateCookie({name, value, expires = 0, httpOnly = false, secure = false, path = '/'}:ISetCookie) {
    deleteCookie(name, path); // Löschen Sie das vorhandene Cookie
    setCookie({name, value, expires, httpOnly, secure, path}); // Setzen Sie das Cookie neu
}
