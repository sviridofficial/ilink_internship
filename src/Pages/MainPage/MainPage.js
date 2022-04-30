import React, {useEffect} from "react";
import Header from "./Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./MainPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSection from "./Components/MainSection/MainSection";
import Notification from "../../Components/Notification/Notification";
import {useStore} from "effector-react";
import {$notificationIsOpen} from "../../State/notifacationStore";

function MainPage(props) {
    const notification = useStore($notificationIsOpen);
    return (
        <div className="mainPage">
            <Header/>
            <MainSection/>
            <Notification type={notification.type} state={notification.isOpen} headerValue={notification.headerValue}
                          value={notification.value}/>
            <Footer/>
        </div>
    );
}

export default MainPage;
