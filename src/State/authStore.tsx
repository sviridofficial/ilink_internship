import {createEvent, createStore} from "effector";

export const $login = createStore("");
export const $password = createStore("");

export const changeLogin = createEvent<string>();
export const changePassword = createEvent<string>();

$login.on(changeLogin, (_, login) => login);
$password.on(changePassword, (_, password) => password);