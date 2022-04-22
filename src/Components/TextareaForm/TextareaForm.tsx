import React from "react";
import styles from "./TextareaForm.module.css";

interface ITextareaForm {
    fieldName: string,
    type: "Краткая информация" | "О себе"
}

const TextareaForm: React.FC<ITextareaForm> = ({fieldName, type}) => {
    return (
        <div className={styles.container}>
            <p className={styles.textareaName}>{fieldName}</p>
            <textarea className={type === "Краткая информация" ? styles.textarea : styles.aboutMe}></textarea>
        </div>
    )
}
export default TextareaForm;