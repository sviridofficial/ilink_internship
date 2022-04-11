import {createEvent, createStore} from "effector";
import {emailValidation, fieldRequired, passwordValidation} from "./validators/authInputsValidators";

interface Ilogin {
    loginState: string,
    validatorErrors: string[]
}

interface IPassword {
    passwordState: string,
    validatorErrors: string[]
}

const loginInitialState: Ilogin = {
    loginState: "",
    validatorErrors: []
}

const passwordInitialState: IPassword = {
    passwordState: "",
    validatorErrors: []
}

export const $login = createStore(loginInitialState);
export const $password = createStore(passwordInitialState);
export const $isSecretPassword = createStore("password");

export const changeLogin = createEvent<string>();
export const changePassword = createEvent<string>();
export const changeSecurityPassword = createEvent();

$login.on(changeLogin, (_, login) => {
    const errors: any[] = [];
    if (fieldRequired(login) != true) {
        errors.push(fieldRequired(login));
    }
    if (emailValidation(login) != true) {
        errors.push(emailValidation(login));
    }
    console.log(errors);
    return {loginState: login, validatorErrors: errors};
});
$password.on(changePassword, (_, password) => {
    const errors: any[] = [];
    if (fieldRequired(password) != true) {
        errors.push(fieldRequired(password));
    }
    if (passwordValidation(password) != true) {
        errors.push(passwordValidation(password));
    }
    console.log(errors);
    return {passwordState: password, validatorErrors: errors};
});
$isSecretPassword.on(changeSecurityPassword, (_) => {
    return _ === "text" ? "password" : "text";
})