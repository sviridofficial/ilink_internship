import React from "react";
import styles from './Form.module.css';
import FormHeader from "./FormHeader/FormHeader";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";
import {useStore} from "effector-react";

import {
    $currentUser,
    $isSecretPassword,
    $login,
    $messageNotFound,
    $password, $users,
    changeLogin,
    changePassword,
    changeSecurityPassword, onSubmitCheckLoginErrors, onSubmitCheckPasswordErrors, showMessage, signIn
} from "../../State/authStore";
import {fieldRequired} from "../../State/validators/authInputsValidators";
import {Link} from "react-router-dom";


const Form: React.FC = () => {

    const login = useStore($login);
    const password = useStore($password);
    const isSecretPassword = useStore($isSecretPassword);
    const currentUser = useStore($currentUser);
    const changeUsername = (value: string): void => {
        changeLogin(value);
    }
    const changePass = (value: string): void => {
        changePassword(value);
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        if (login.validatorErrors.length > 0 || password.validatorErrors.length > 0) {
            showMessage(false);

        } else if (fieldRequired(login.loginState) != true || fieldRequired(password.passwordState) != true) {
            onSubmitCheckLoginErrors(login.loginState);
            onSubmitCheckPasswordErrors(password.passwordState);
            showMessage(false);
        } else {
            for (let i = 0; i < $users.getState().length; i++) {
                if ($users.getState()[i].login === login.loginState && $users.getState()[i].password === password.passwordState) {
                    window.location.href = 'https://ilink-academy.vercel.app/'
                    break;
                }
            }
            showMessage(true);
        }
        event.preventDefault()
    }
    return (
        <div className={styles.FormContainer}>
            <div className={styles.Form}>
                <FormHeader headerText={"Войти"}/>
                <form onSubmit={handleSubmit}>
                    <FormInput errors={login.validatorErrors} showEye={false} value={login.loginState} type={"text"}
                               inputLabel={"Логин"}
                               placeholder={"Введите логин"}
                               changeState={changeUsername}/>
                    <FormInput errors={password.validatorErrors} showEye={true} value={password.passwordState}
                               type={isSecretPassword} inputLabel={"Пароль"}
                               placeholder={"Введите пароль"}
                               changeState={changePass}/>
                    <Button type={"submit"} label={"Войти"} size={"Small"} isCancel={false}/>
                    <Link to={"/reset"}>
                        <div className={styles.forgotPasswordBlock}>
                            <a className={styles.forgotPassword} href={'/'}>Забыли пароль?</a>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Form;