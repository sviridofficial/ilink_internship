import React from "react";
import styles from "./Notification.module.css";
import {ReactComponent as GreenBubble} from "../../Assets/greenBubbles.svg";
import {ReactComponent as RedBubble} from "../../Assets/redBubbles.svg";
import {ReactComponent as Check} from "../../Assets/check.svg";

import {ReactComponent as Cross} from "../../Assets/cross.svg";
import {ReactComponent as Close} from "../../Assets/close.svg";
import {notificationClose} from "../../State/notifacationStore";

interface INotification {
    type: string
    state: boolean

}

const Notification: React.FC<INotification> = ({type, state}) => {
    const closeNotification = (): void => {
        notificationClose();
    }

    return (
        <div className={state ? styles.isOpen : styles.isClosed}>
            <div className={type === "error" ? styles.notificationsError : styles.notifications}>
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
                        {type == "success" ? "Код отправлен" : "Что-то не так..."}
                    </div>
                    <Close className={type === "success" ? styles.cancel : styles.cancelError}
                           onClick={closeNotification}/>
                </div>
                <div className={styles.message}>
                    {type === "success" ? <p>Код успешно отправлен на вашу
                        почту!</p> : <p>Не получилось отправить код. Попробуйте еще раз!</p>}
                </div>

            </div>
        </div>
    )
}

export default Notification;
