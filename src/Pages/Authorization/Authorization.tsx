import React, {useEffect} from "react";
import style from "./Auth.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FormHeader from "../../Components/Form/FormHeader/FormHeader";
import Form from "../../Components/Form/Form";
import UserNotExist from "../../Components/UserNotExist/UserNotExist";
import {Route, Routes} from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import {$messageNotFound, userAuthFx} from "../../State/authStore";
import {useStore} from "effector-react";

const Authorization: React.FC = () => {
    const errorMessage = useStore($messageNotFound);
    return (
        <div className={style.page}>
            <Header/>
            <Form/>
            <UserNotExist message={errorMessage.message}/>
            <Footer/>
        </div>
    );
}

export default Authorization;