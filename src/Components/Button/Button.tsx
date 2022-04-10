import React from "react";
import styles from './Button.module.css';

export interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {

    return (
        <div className={styles.ButtonContainer}>
            <button className={styles.Button}>
                {label}
            </button>
        </div>
    )
}

export default Button;