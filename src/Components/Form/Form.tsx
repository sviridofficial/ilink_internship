import React from "react";
import styles from './Form.module.css';
import FormHeader from "./FormHeader/FormHeader";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";


const Form: React.FC = () => {
    return (
        <div className={styles.FormContainer}>
            <div className={styles.Form}>
                <FormHeader headerText={"Войти"}/>
                <FormInput inputLabel={"Логин"} placeholder={"Введите логин"}/>
                <FormInput inputLabel={"Пароль"} placeholder={"Введите пароль"}/>
                <Button label={"Войти"}/>
                <div className={styles.forgotPasswordBlock}>
                    <a className={styles.forgotPassword} href={'/'}>Забыли пароль?</a>
                </div>
            </div>
        </div>
    )
}

export default Form;