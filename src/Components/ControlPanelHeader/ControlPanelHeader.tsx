import React from "react";
import styles from "./ControlPanelHeader.module.css";
import userPhoto from "../../Pages/MainPage/Components/Header/headerPhoto.png";
import ilink from "../../Assets/ilink.svg";
import academy from "../../Assets/academy.svg";
import {NavLink} from "react-router-dom";

const ControlPanelHeader: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.block}>
                <div className={styles.userBlock}>
                    <img className={styles.userPhoto} src={userPhoto}/>
                    <p className={styles.name}>Константин Свиридов</p>
                </div>
                <p className={styles.headerText}>Панель управления</p>
            </div>


            <div>
                <NavLink to={"/main"} className={styles.link}>
                    <div className={styles.logoBlock}>
                        <img className={styles.ilink} src={ilink}/>
                        <img className={styles.academy} src={academy}/>
                    </div>
                </NavLink>
            </div>

        </header>
    )
}

export default ControlPanelHeader;