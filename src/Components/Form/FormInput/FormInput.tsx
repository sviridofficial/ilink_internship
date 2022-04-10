import React from "react";
import styles from "./FormInput.module.css";
import {ReactComponent as Show} from "../../../Assets/Show.svg";
import {ReactComponent as Hide} from "../../../Assets/Hide.svg";
import {ReactComponent as Info} from "../../../Assets/Info.svg";

export interface FormInputProps {
    inputLabel: string
    placeholder: string
}

const FormInput: React.FC<FormInputProps> = ({inputLabel, placeholder}) => {
    return (
        <div className={styles.formInput}>
            <p className={styles.inputHeader}>{inputLabel}</p>
            <input className={styles.input} placeholder={placeholder}></input>
            <div className={styles.notification}>
                <div className={styles.show}><Show/></div>
                <div className={styles.hide}><Hide/></div>
                <div className={styles.info}><Info/></div>
            </div>
        </div>
    )
}

export default FormInput;