import React from "react";
import styles from "./Status.module.css";

export interface IStatusProps {
    value: "Обучается"|"Закончил"|"Отчислен"
}

const Status: React.FC<IStatusProps> = ({value}) => {
    return (
        <div className={value==="Отчислен"?styles.status: value==="Обучается"?styles.start:styles.end}>
            <p>{value}</p>
        </div>
    )
}

export default Status;