import React from "react";
import styles from './Button.module.css';

export interface ButtonProps {
    width: number,
    height: number
    label: string
}

const Button: React.FC<ButtonProps> = ({width, height, label}) => {

    return (
        <div className={styles.ButtonContainer}>
            <button className={styles.Button} style={{width: `${width}px`, height: `${height}px`}}>
                {label}
            </button>
        </div>
    )
}

export default Button;