import React from "react";
import styles from "./SliderButtons.module.css"
import {useStore} from "effector-react";
import {$mobileSliderState, changePosition} from "../../State/mobileSliderState";

const SliderButtons: React.FC = () => {
    const sliderPosition = useStore($mobileSliderState);
    const rightButtonClick = () => {
        if (sliderPosition !== "Right") {
            changePosition();
        }
    }
    const leftButtonClick = () => {
        if (sliderPosition !== "Left") {
            changePosition();
        }
    }
    return (
        <div className={styles.buttons}>
            <button onClick={leftButtonClick}
                    className={sliderPosition === "Left" ? styles.activeButton : styles.noActiveButton}></button>
            <button onClick={rightButtonClick}
                    className={sliderPosition === "Right" ? styles.activeButton : styles.noActiveButton}></button>
        </div>
    )
}
export default SliderButtons;