import React from "react";
import styles from "../Form/Form.module.css"
import FormInput from "../Form/FormInput/FormInput";
import {useStore} from "effector-react";
import {$login, changeLogin} from "../../State/authStore";
import FormHeader from "../Form/FormHeader/FormHeader";
import {ReactComponent as BackButton} from "../../Assets/back.svg";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {emailValidation, fieldRequired} from "../../State/validators/authInputsValidators";
import {notificationClose, notificationOpen, setNotificationType} from "../../State/notifacationStore";


const ResetPasswordForm: React.FC = () => {
    const login = useStore($login);
    const changeUsername = (value: string): void => {
        changeLogin(value);

    }
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        if (fieldRequired($login.getState().loginState) == true && emailValidation($login.getState().loginState) == true) {
            setNotificationType("success");
            notificationOpen();
        } else {
            setNotificationType("error");
            notificationOpen();
        }
        event.preventDefault();
    }

    return (
        <div className={styles.FormContainer}>
            <div className={styles.Form}>
                <FormHeader headerText={"Сброс пароля"}/>
                <div className={styles.backButton}>
                    <Link to={"/"} onClick={() => {
                        notificationClose()
                    }}><BackButton/></Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInput errors={login.validatorErrors} showEye={false} value={login.loginState} type={"text"}
                               inputLabel={"Электронная почта"}
                               placeholder={"Введите почту"}
                               changeState={changeUsername}/>
                    <div className={styles.buttons}>
                        <Button label={"Отправить код"} type={"submit"} size={"Big"} isCancel={false}/>
                        <Link onClick={() => {
                            notificationClose()
                        }} className={styles.link} to={"/"}><Button label={"Отмена"}
                                                                    type={"reset"}
                                                                    size={"Small"}
                                                                    isCancel={true}></Button></Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordForm;