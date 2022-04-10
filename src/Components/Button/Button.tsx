import React from "react";
import styles from './Button.module.css';

export interface ButtonProps {
    label: string,
    type: "button" | "submit" | "reset" | undefined;

}

const Button: React.FC<ButtonProps> = ({label, type}) => {

    return (
        <div className={styles.ButtonContainer}>
            <button type={type}
                    className={styles.Button}>
                {label}
            </button>
        </div>
    )
}

export default Button;