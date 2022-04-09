import React from "react";
import ilinkLogo from "../../Assets/ilink.svg";
import academyLogo from "../../Assets/academy.svg";
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.Header}>
            <img src={ilinkLogo} className={styles.ilinkLogo}/>
            <img src={academyLogo} className={styles.academyLogo}/>
        </header>
    )
}

export default Header;
