import React, {useState} from "react";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import styles from "./AboutMe.module.css";
import AboutMeContent from "../../Components/AboutMeContent/AboutMeContent";
import Footer from "../../Components/Footer/Footer";
import ErrorEditBlock from "../../Components/ErrorEditBlock/ErrorEditBlock";
import Notification from "../../Components/Notification/Notification";
import {useStore} from "effector-react";
import {$notificationIsOpen} from "../../State/notifacationStore";

const AboutMe: React.FC = () => {
    const [error, setError] = useState({isActive: false, errorMessage: ""});
    const notificationState = useStore($notificationIsOpen);
    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <AboutMeContent setError={setError}/>
            </div>
            <Notification type={notificationState.type} state={notificationState.isOpen}
                          headerValue={notificationState.headerValue} value={notificationState.value}/>
            <ErrorEditBlock isActive={error.isActive} errorMessage={error.errorMessage}/>
            <Footer/>
        </div>
    )
}

export default AboutMe;
