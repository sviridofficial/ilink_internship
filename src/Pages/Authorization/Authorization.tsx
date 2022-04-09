import React from "react";
import style from "./Auth.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FormHeader from "../../Components/Form/FormHeader/FormHeader";
import Form from "../../Components/Form/Form";

const Authorization: React.FC = () => {

    return (
        <div className={style.page}>
            <Header/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Authorization;