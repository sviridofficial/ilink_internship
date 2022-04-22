import React from "react";
import styles from "./TextareaForm.module.css";

interface ITextareaForm {
    fieldName: string,
    type: "Краткая информация" | "О себе",
    value: string,
    isEdit: boolean

    setValue(value: string): void
}

const TextareaForm: React.FC<ITextareaForm> = ({fieldName, type, value, setValue, isEdit}) => {
    return (
        <div className={styles.container}>
            <p className={styles.textareaName}>{fieldName}</p>
            <textarea disabled={!isEdit} value={value} onChange={(event) => {
                setValue(event.target.value)
            }} className={type === "Краткая информация" ? styles.textarea : styles.aboutMe}></textarea>
        </div>
    )
}
export default TextareaForm;