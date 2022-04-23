import React from "react";
import styles from "./Notification.module.css";
import {ReactComponent as GreenBubble} from "../../Assets/greenBubbles.svg";
import {ReactComponent as RedBubble} from "../../Assets/redBubbles.svg";
import {ReactComponent as Check} from "../../Assets/check.svg";

import {ReactComponent as Cross} from "../../Assets/cross.svg";
import {ReactComponent as Close} from "../../Assets/close.svg";
import {notificationOpen} from "../../State/notifacationStore";

interface INotification {
    type: string
    state: boolean,
    headerValue: string,
    value: string
}

const Notification: React.FC<INotification> = ({type, state, headerValue, value}) => {
    const closeNotification = (): void => {
        notificationOpen({isOpen: false, type: "success", value: "", headerValue: ""})
    }

    return (
        <div className={state ? styles.isOpen : styles.isClosed}>
            <div
                className={type === "error" ? styles.notificationsError : styles.notifications}>
                <div className={type === "error" ? styles.circleError : styles.circle}>
                    <div className={styles.circleInner}>
                        {type === "success" ? <Check/> : <Cross/>}
                    </div>
                </div>
                <div className={styles.bubble}>
                    {type === "success" ? <GreenBubble/> : <RedBubble/>}
                </div>
                <div className={styles.notificationHeader}>
                    <div className={styles.title}>
                        {headerValue}
                    </div>
                    <Close
                        className={type === "success" ? styles.cancel : styles.cancelError}
                        onClick={closeNotification}/>
                </div>
                <div className={styles.message}>
                    {value}
                </div>
            </div>
        </div>
    )
}

export default Notification;
