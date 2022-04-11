import React from "react";
import styles from './Form.module.css';
import FormHeader from "./FormHeader/FormHeader";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";
import {useEvent, useStore} from "effector-react";
import {
    $isSecretPassword,
    $login,
    $password,
    changeLogin,
    changePassword,
    changeSecurityPassword
} from "../../State/authStore";


const Form: React.FC = () => {
    const login = useStore($login);
    const password = useStore($password);
    const isSecretPassword = useStore($isSecretPassword);
    const changeUsername = (value: string): void => {
        changeLogin(value);
    }
    const changePass = (value: string): void => {
        changePassword(value);
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        alert(login.loginState + " " + password.passwordState);
        event.preventDefault()
    }


    return (
        <div className={styles.FormContainer}>
            <div className={styles.Form}>
                <FormHeader headerText={"Войти"}/>
                <form onSubmit={handleSubmit}>
                    <FormInput errors={login.validatorErrors} showEye={false} value={login.loginState} type={"text"} inputLabel={"Логин"}
                               placeholder={"Введите логин"}
                               changeState={changeUsername}/>
                    <FormInput errors={password.validatorErrors} showEye={true} value={password.passwordState} type={isSecretPassword} inputLabel={"Пароль"}
                               placeholder={"Введите пароль"}
                               changeState={changePass}/>
                    <Button type={"submit"} label={"Войти"}/>
                    <div className={styles.forgotPasswordBlock}>
                        <a className={styles.forgotPassword} href={'/'}>Забыли пароль?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;