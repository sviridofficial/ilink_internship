import React from "react";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import {Route} from "react-router-dom";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import styles from "./Members.module.css"
import Footer from "../../Components/Footer/Footer";
import MembersContent from "../../Components/MembersContent/MembersContent";

const Members: React.FC = () => {
    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <MembersContent/>
            </div>
<Footer/>
        </div>
    )
}
export default Members;
