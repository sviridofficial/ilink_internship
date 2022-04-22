import React, {useState} from "react";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import styles from "./AboutMe.module.css";
import AboutMeContent from "../../Components/AboutMeContent/AboutMeContent";
import Footer from "../../Components/Footer/Footer";
import ErrorEditBlock from "../../Components/ErrorEditBlock/ErrorEditBlock";

const AboutMe: React.FC = () => {
    const [error, setError] = useState({isActive: false, errorMessage: ""});
    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <AboutMeContent setError={setError}/>
            </div>
            <ErrorEditBlock isActive={error.isActive} errorMessage={error.errorMessage}/>
            <Footer/>
        </div>
    )
}

export default AboutMe;
