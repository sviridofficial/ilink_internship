import React from "react";
import styles from "../Authorization/Auth.module.css";
import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import UserNotExist from "../../Components/UserNotExist/UserNotExist";
import Footer from "../../Components/Footer/Footer";
import ResetPasswordForm from "../../Components/ResetPasswordForm/ResetPasswordForm";

const ResetPassword: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <ResetPasswordForm/>
            <Footer/>
        </div>
    )
}

export default ResetPassword;