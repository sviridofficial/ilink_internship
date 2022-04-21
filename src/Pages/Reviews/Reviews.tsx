import React from "react";
import styles from "./Review.module.css";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";
import Footer from "../../Components/Footer/Footer";
import ReviewContent from "../../Components/ReviewContent/ReviewContent";

const Reviews: React.FC = () => {

    return (
        <div className={styles.page}>
            <ControlPanelHeader/>
            <div className={styles.grid}>
                <PanelNavbar/>
                <ReviewContent/>
            </div>
        </div>
    )
}
export default Reviews;
