export function censorEmail(email: string){
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex, dotIndex)
    console.log(username)
    console.log(domain)
}