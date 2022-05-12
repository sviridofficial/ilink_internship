import React, {useEffect} from "react";
import styles from "./ControlPanelHeader.module.css";
import userPhoto from "../../Pages/MainPage/Components/Header/headerPhoto.png";
import ilink from "../../Assets/ilink.svg";
import academy from "../../Assets/academy.svg";
import {NavLink} from "react-router-dom";
import {useStore} from "effector-react";
import {$userStore, changeHeader, changeUserInformation, getYearsOld} from "../../State/userStore";
import {getUserInfo} from "../../State/api";

const ControlPanelHeader: React.FC = () => {
    const userData = useStore($userStore);
    useEffect(() => {
        const getData = async () => {
            const result = await getUserInfo();
            if (result.statusCode === 401) {
            } else {
                changeHeader({
                    username: result.firstName,
                    lastname: result.lastName,
                    image: "https://academtest.ilink.dev/images/" + result.profileImage
                })
            }
        }
        getData();
    }, [])
    return (
        <header className={styles.header}>
            <div className={styles.block}>
                <div className={styles.userBlock}>
                    <img className={styles.userPhoto} src={userData.imagePath}/>
                    <p className={styles.name}>{userData.username + " " + userData.lastname}</p>
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