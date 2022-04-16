import {createEvent, createStore} from "effector";
import {emailValidation, fieldRequired, passwordValidation} from "./validators/authInputsValidators";

export const $users = createStore([
    {
        login: "sviridov_kkk@mail.ru",
        password: "SviridovKostya2001!"
    },
    {
        login: "test@mail.ru",
        password: "Test2022!"
    }])

export const $currentUser = createStore(
    {
        login: "",
        password: ""
    }
)

interface IUser {
    login: string,
    password: string
}

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

export const $messageNotFound = createStore(false);

export const $login = createStore(loginInitialState);
export const $password = createStore(passwordInitialState);
export const $isSecretPassword = createStore("password");

export const showMessage = createEvent<boolean>();
export const changeLogin = createEvent<string>();
export const clearLogin = createEvent();
export const changePassword = createEvent<string>();
export const changeSecurityPassword = createEvent();
export const onSubmitCheckLoginErrors = createEvent<string>();
export const onSubmitCheckPasswordErrors = createEvent<string>();
export const signIn = createEvent<IUser>();

$login.on(onSubmitCheckLoginErrors, (_, login) => {
    const errors: any[] = [];
    if (fieldRequired(login) != true) {
        errors.push(fieldRequired(login));
    }
    if (emailValidation(login) != true) {
        errors.push(emailValidation(login))
    }
    return {..._, validatorErrors: [...errors]}
})

$password.on(onSubmitCheckPasswordErrors, (_, password) => {
    const errors: any[] = [];
    if (fieldRequired(password) != true) {
        errors.push(fieldRequired(password));
    }
    if (passwordValidation(password) != true) {
        errors.push(passwordValidation(password))
    }
    return {..._, validatorErrors: [...errors]};
})

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

$login.on(clearLogin, (_) => {
    return {..._, loginState: "", validatorErrors: []}
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

$messageNotFound.on(showMessage, (_, bool) => {
    return bool;
})

$currentUser.on(signIn, (_, data: IUser) => {
    for (let i = 0; i < $users.getState().length; i++) {
        if ($users.getState()[i].login === data.login && $users.getState()[i].password === data.password) {
            return {login: data.login, password: data.password}
        }
    }
})