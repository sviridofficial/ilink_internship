import React from "react";
import styles from "./Status.module.css";

export interface IStatusProps {
    value: "studies" | "Закончил" | "Отчислен"
}

const Status: React.FC<IStatusProps> = ({value}) => {
    return (
        <div className={value === "Отчислен" ? styles.status : value === "studies" ? styles.start : styles.end}>
            <p>{value==="studies"? "Обучается":"Отчислен"}</p>
        </div>
    )
}

export default Status;