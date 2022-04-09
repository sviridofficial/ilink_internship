import React from "react";
import styles from "./FormInput.module.css";

export interface FormInputProps {
    inputLabel: string
    placeholder: string
}

const FormInput: React.FC<FormInputProps> = ({inputLabel, placeholder}) => {
    return (
        <div className={styles.formInput}>
            <p className={styles.inputHeader}>{inputLabel}</p>
            <input className={styles.input} placeholder={placeholder}></input>
        </div>
    )
}

export default FormInput;