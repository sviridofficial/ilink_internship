import React from "react";
import styles from "./Footer.module.css";
import {ReactComponent as Telegram} from "../../Assets/telegram.svg";
import {ReactComponent as Vkontakte} from "../../Assets/vkontakte.svg";
import {ReactComponent as Discord} from "../../Assets/discord.svg";

const Footer: React.FC = () => {
    return (
        <footer className={styles.Footer}>
            <p className={styles.companyDescription}>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
            <div className={styles.icons}>
                <a href="https://vk.com/sviridov_kkk" target="_blank">
                    <Vkontakte/>
                </a>
                <a href="https://discord.gg/TpFUhtg3" target="_blank">
                    <Discord/>
                </a>
                <a href="https://t.me/KKKASTETTT" target="_blank">
                    <Telegram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;