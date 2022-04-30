import React from "react";
import styles from "./Captcha.module.css";
import {changeInputName} from "../../State/reviewsStore";
import errorImage from "../../Pages/MainPage/Components/Modal/CustomInputField/errorImage.svg";

interface ICaptchaInputProps {
    value: string,

    setValue(value: string): void
}

const CapthaInput: React.FC<ICaptchaInputProps> = ({value, setValue}) => {
    return (
        <div>
            <input value={value} className={styles.nameInput} onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default CapthaInput;