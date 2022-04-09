import React from "react";
import styles from './FormHeader.module.css';

export interface FormHeaderProps {
    headerText: string
}

const FormHeader: React.FC<FormHeaderProps> = ({headerText}) => {
    return (
        <h1 className={styles.headerText}>{headerText}</h1>
    )
}

export default FormHeader;