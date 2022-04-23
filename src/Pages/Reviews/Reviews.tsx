import React from "react";
import styles from "./Review.module.css";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import Footer from "../../Components/Footer/Footer";
import ReviewContent from "../../Components/ReviewContent/ReviewContent";
import Notification from "../../Components/Notification/Notification";
import {useStore} from "effector-react";
import {$notificationIsOpen} from "../../State/notifacationStore";

const Reviews: React.FC = () => {
    const notificationState = useStore($notificationIsOpen);
    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <ReviewContent/>
            </div>
            <Notification type={notificationState.type} state={notificationState.isOpen}
                          headerValue={notificationState.headerValue} value={notificationState.value}/>
            <Footer/>
        </div>
    )
}
export default Reviews;
