import React from "react";
import styles from "../Authorization/Auth.module.css";
import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import UserNotExist from "../../Components/UserNotExist/UserNotExist";
import Footer from "../../Components/Footer/Footer";
import ResetPasswordForm from "../../Components/ResetPasswordForm/ResetPasswordForm";
import Notification from "../../Components/Notification/Notification";
import {useStore} from "effector-react";
import {$notificationIsOpen} from "../../State/notifacationStore";

const ResetPassword: React.FC = () => {
    const notificationState = useStore($notificationIsOpen);
    return (
        <div className={styles.page}>
            <Header/>
            <ResetPasswordForm/>
            <Notification headerValue={notificationState.headerValue} value={notificationState.value}
                          state={notificationState.isOpen} type={notificationState.type}/>
            <Footer/>
        </div>
    )
}

export default ResetPassword;