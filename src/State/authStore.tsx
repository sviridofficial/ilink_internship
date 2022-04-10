import {createEvent, createStore} from "effector";

export const $login = createStore("");
export const $password = createStore("");
export const $isSecretPassword = createStore("password");

export const changeLogin = createEvent<string>();
export const changePassword = createEvent<string>();
export const changeSecurityPassword = createEvent();

$login.on(changeLogin, (_, login) => login);
$password.on(changePassword, (_, password) => password);
$isSecretPassword.on(changeSecurityPassword, (_) => {
    return _ === "text" ? "password" : "text";
})