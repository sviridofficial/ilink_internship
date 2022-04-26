import {createEffect, createEvent, createStore} from "effector";
import {emailValidation, fieldRequired, passwordValidation} from "./validators/authInputsValidators";
import {useNavigate} from "react-router-dom";

export const $users = createStore([
    {
        login: "kostya.sviridov.01@mail.ru",
        password: "SviridovKostya2001!"
    },
    {
        login: "test@mail.ru",
        password: "Test2022!"
    }])

export const $currentUser = createStore(
    {
        login: "kostya.sviridov.01@mail.ru",
        password: "Qw2222@@"
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

interface IErrorMessage {
    state: boolean,
    message: string
}

const passwordInitialState: IPassword = {
    passwordState: "",
    validatorErrors: []
}

export const $messageNotFound = createStore({state: false, message: "Такого пользователя не существует"});

export const $login = createStore(loginInitialState);
export const $password = createStore(passwordInitialState);
export const $isSecretPassword = createStore("password");

export const showMessage = createEvent<IErrorMessage>();
export const changeLogin = createEvent<string>();
export const clearLogin = createEvent();
export const clearPassword = createEvent();
export const changePassword = createEvent<string>();
export const changeSecurityPassword = createEvent();
export const onSubmitCheckLoginErrors = createEvent<string>();
export const onSubmitCheckPasswordErrors = createEvent<string>();
export const signIn = createEvent<IUser>();
export const $fetchError = createStore<Error | null>(null);
export const userAuthFx = async () => {
    const url = "https://academtest.ilink.dev/user/signIn"

    const req = await fetch(url, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: new URLSearchParams({
            'email': $login.getState().loginState,
            'password': $password.getState().passwordState
        })
    })
    return req.json();
}


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
    return {loginState: login, validatorErrors: errors};
});

$login.on(clearLogin, (_) => {
    return {..._, loginState: "", validatorErrors: []}
});

$password.on(clearPassword, (_) => {
    return {..._, passwordState: "", validatorErrors: []}
})

$password.on(changePassword, (_, password) => {
    const errors: any[] = [];
    if (fieldRequired(password) != true) {
        errors.push(fieldRequired(password));
    }
    if (passwordValidation(password) != true) {
        errors.push(passwordValidation(password));
    }
    return {passwordState: password, validatorErrors: errors};
});
$isSecretPassword.on(changeSecurityPassword, (_) => {
    return _ === "text" ? "password" : "text";
})

$messageNotFound.on(showMessage, (_, error) => {
    return error;
})

$currentUser.on(signIn, (_, data: IUser) => {
    for (let i = 0; i < $users.getState().length; i++) {
        if ($users.getState()[i].login === data.login && $users.getState()[i].password === data.password) {
            return {login: data.login, password: data.password}
        }
    }
})