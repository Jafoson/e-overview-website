 export interface Ivalidation {
    isValid: boolean
    errors: string[]
}

export const passwordValidation = (password: string): string[] => {
    const errors: string[] = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (password.length > 32) {
        errors.push("Password must not exceed 32 characters.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit.");
    }

    if (!/[@#$%^&+=!*_]/.test(password)) {
        errors.push("Password must contain at least one special character (@#$%^&+=!*_).");
    }

    return errors;
};

export const emailValidation = (email: string):string[] => {
    const errors: string[] = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length > 64) {
        errors.push("E-Mail must not exceed 64 characters");
    }

    if (!emailRegex.test(email)) {
        errors.push("E-Mail address is invalid");
    }

    return errors;
}

export const usernameValidation = (email: string): string[]  => {
    const errors: string[] = [];

    if (email.length < 4){
        errors.push("Username must be at least 4 characters long.");
    }

    if (email.length > 32){
        errors.push("Username must not exceed 32 characters");
    }

    return errors

}

export const loginValidation = (emailUsername: string, password: string): {passwordErrors: string[], usersErrors: string[] } => {
    let passwordErrors: string[] = [];
    const usersErrors: string[] = [];

    passwordErrors = passwordValidation(password)

    if (emailUsername.length < 4){
        usersErrors.push("Username/E-Mail must be at least 4 characters long.");
    }
    if (emailUsername.length > 64){
        usersErrors.push("Username/E-Mail must not exceed 64 characters");
    }


    return{
        passwordErrors: passwordErrors,
        usersErrors: usersErrors,
    }
}

export const identicalPasswordsValidation = (password: string, repeatPassword: string):{passwordErrors: string[], repeatPasswordErrors: string[]} => {
    const passwordErrors :string[] = passwordValidation(password);
    const repeatPasswordErrors: string[] = []


    if (password != repeatPassword && repeatPassword.length != 0){
        repeatPasswordErrors.push("These passwords do not match. Try again.")
    }
    if (repeatPassword.length == 0){
        repeatPasswordErrors.push("Please confirm password.")
    }

    return{
        passwordErrors: passwordErrors,
        repeatPasswordErrors: repeatPasswordErrors
    }

}
