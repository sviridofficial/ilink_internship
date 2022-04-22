import React from "react";
import styles from "./FormInput.module.css";

interface IFormInput {
    fieldName: string,
    value: string,
    isEdit: boolean

    setValue(value: string): void
}

const FormInput: React.FC<IFormInput> = ({fieldName, value, setValue, isEdit}) => {
    return (<div className={styles.formInput}>
            <p className={styles.inputName}>{fieldName}</p>
            <input value={value} className={styles.input} type={"text"}
                   disabled={!isEdit} onChange={(event) => setValue(event.target.value)}/>
        </div>
    )
}

export default FormInput;