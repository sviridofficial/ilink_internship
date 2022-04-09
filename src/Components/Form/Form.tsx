import React from "react";
import styles from './Form.module.css';
import FormHeader from "./FormHeader/FormHeader";
import FormInput from "./FormInput/FormInput";


const Form: React.FC = () => {
    return (
        <div className={styles.Form}>
            <FormHeader headerText={"Войти"}/>
            <FormInput inputLabel={"Логин"} placeholder={"Введите логин"}/>
            <FormInput inputLabel={"Пароль"} placeholder={"Введите пароль"}/>
        </div>
    )
}

export default Form;