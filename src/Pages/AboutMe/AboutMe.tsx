import React from "react";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import styles from "./AboutMe.module.css";
import AboutMeContent from "../../Components/AboutMeContent/AboutMeContent";
import Footer from "../../Components/Footer/Footer";

const AboutMe: React.FC = () => {
    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <AboutMeContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;
