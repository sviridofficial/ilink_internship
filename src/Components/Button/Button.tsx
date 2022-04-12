import React from "react";
import styles from './Button.module.css';

export interface ButtonProps {
    label: string,
    type: "button" | "submit" | "reset" | undefined;
    size: string,
    isCancel: boolean

}

const Button: React.FC<ButtonProps> = ({label, type, size, isCancel}) => {
    if (!isCancel) {
        return (
            <div className={styles.ButtonContainer}>
                <button type={type} className={size === "Big" ? styles.BigButton : styles.Button}>
                    {label}
                </button>
            </div>
        )
    } else {
        return (
            <div className={styles.ButtonContainerCancel}>
                <button type={type} className={styles.cancelButton}>
                    {label}
                </button>
            </div>
        )
    }
}

export default Button;