import React from "react";
import styles from "./FormInput.module.css";

interface IFormInput {
    fieldName: string
}

const FormInput: React.FC<IFormInput> = ({fieldName}) => {
    return (<div className={styles.formInput}>
            <p className={styles.inputName}>{fieldName}</p>
            <input className={styles.input} type={"text"}/>
        </div>
    )
}

export default FormInput;