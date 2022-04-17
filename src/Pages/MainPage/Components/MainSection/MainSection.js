import React from "react";
import WelcomeToAcademy from "./AboutMe/WelcomeToAcademy";
import AboutMe from "./AboutMe/AboutMe";
import Reviews from "./ Reviews/ Reviews";
import "./MainSection.css";
import Notification from "../../../../Components/Notification/Notification";
import {useStore} from "effector-react";
import {$notificationIsOpen} from "../../../../State/notifacationStore";

const MainSection = () => {
    const notification = useStore($notificationIsOpen);
    return (
        <div className='section'>
            <WelcomeToAcademy/>
            <AboutMe/>
            <Reviews/>
            <Notification type={notification.type} state={notification.isOpen}/>
        </div>
    )
}

export default MainSection;