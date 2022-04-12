import React from "react";
import styles from "../Form/Form.module.css"
import FormInput from "../Form/FormInput/FormInput";
import {useStore} from "effector-react";
import {$login, changeLogin} from "../../State/authStore";
import FormHeader from "../Form/FormHeader/FormHeader";
import {ReactComponent as BackButton} from "../../Assets/back.svg";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const ResetPasswordForm: React.FC = () => {
    const login = useStore($login);
    const changeUsername = (value: string): void => {
        changeLogin(value);
    }
    return (
        <div className={styles.FormContainer}>
            <div className={styles.Form}>
                <FormHeader headerText={"Сброс пароля"}/>
                <div className={styles.backButton}>
                    <Link to={"/"}><BackButton/></Link>
                </div>
                <FormInput errors={login.validatorErrors} showEye={false} value={login.loginState} type={"text"}
                           inputLabel={"Электронная почта"}
                           placeholder={"Введите почту"}
                           changeState={changeUsername}/>
                <div className={styles.buttons}>
                    <Button label={"Отправить код"} type={"submit"} size={"Big"} isCancel={false}/>
                    <Button label={"Отмена"} type={"submit"} size={"Small"} isCancel={true}/>
                </div>

            </div>
        </div>
    )
}

export default ResetPasswordForm;