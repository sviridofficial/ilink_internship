import React from "react";
import styles from "./PanelNavbar.module.css";
import {NavLink} from "react-router-dom";
import {notificationOpen} from "../../State/notifacationStore";


const PanelNavbar: React.FC = () => {
    const clearNotifications = () => {
        notificationOpen({isOpen: false, type: "success", value: "", headerValue: ""});
    }
    return (
        <div className={styles.navbar}>
            <NavLink to={"/members"} onClick={clearNotifications}
                     className={({isActive}) => (isActive ? styles.link + " " + styles.active : styles.link)}>
                <div className={styles.navbarItem}>
                    <div className={styles.members}></div>
                    <p className={styles.text}>Участники</p>
                </div>
            </NavLink>
            <NavLink to={"/reviews"} onClick={clearNotifications}
                     className={({isActive}) => (isActive ? styles.link + " " + styles.active : styles.link)}>
                <div className={styles.navbarItem}>
                    <div className={styles.chat}></div>
                    <p className={styles.text}>Отзывы</p>
                </div>
            </NavLink>
            <NavLink to={"/aboutme"} onClick={clearNotifications}
                     className={({isActive}) => (isActive ? styles.link + " " + styles.active : styles.link)}>
                <div className={styles.navbarItem}>
                    <div className={styles.paper}></div>
                    <p className={styles.text}>Обо мне</p>
                </div>
            </NavLink>
        </div>
    )
}

export default PanelNavbar;