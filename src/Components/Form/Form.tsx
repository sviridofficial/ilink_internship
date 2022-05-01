import React, {useEffect} from "react";
import styles from './Form.module.css';
import FormHeader from "./FormHeader/FormHeader";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";
import {useStore} from "effector-react";
import {
    $currentUser, $fetchError,
    $isSecretPassword,
    $login,
    $messageNotFound,
    $password,
    $users,
    changeLogin,
    changePassword,
    changeSecurityPassword,
    clearLogin,
    clearPassword,
    onSubmitCheckLoginErrors,
    onSubmitCheckPasswordErrors,
    showMessage,
    signIn
} from "../../State/authStore";
import {fieldRequired} from "../../State/validators/authInputsValidators";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {userAuthFx} from "../../State/api";


const Form: React.FC = () => {
    const link = useNavigate();
    const login = useStore($login);
    const password = useStore($password);
    const isSecretPassword = useStore($isSecretPassword);
    const changeUsername = (value: string): void => {
        changeLogin(value);
    }
    const changePass = (value: string): void => {
        changePassword(value);
    }

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (fieldRequired(login.loginState) != true || fieldRequired(password.passwordState) != true) {
            onSubmitCheckLoginErrors(login.loginState);
            onSubmitCheckPasswordErrors(password.passwordState);
            showMessage({state: false, message: ""});
        } else if (login.validatorErrors.length > 0 || password.validatorErrors.length > 0) {
            showMessage({state: false, message: ""});
        } else {
            let result = await userAuthFx()
            if (result.statusCode === 400) {
                showMessage({state: true, message: "Неверный пароль"})
            } else if (result.statusCode === 500) {
                showMessage({state: true, message: "Такого пользователя не существует"})
            } else {
                showMessage({state: false, message: ""})
                localStorage.setItem("token", result.accessToken);
                link("/main")
            }
        }

    }
    const clear = (): void => {
        clearLogin();
        clearPassword();
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
                    <Link onClick={clear} to={"/reset"}>
                        <div className={styles.forgotPasswordBlock}>
                            <a className={styles.forgotPassword}>Забыли пароль?</a>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Form;