import React from "react";
import styles from "./Status.module.css";

interface IStatusProps {
    value: "Обучается"|"Зачислен"|"Отчислен"
}

const Status: React.FC<IStatusProps> = ({value}) => {
    return (
        <div className={value==="Отчислен"?styles.status: value==="Зачислен"?styles.start:styles.end}>
            <p>{value}</p>
        </div>
    )
}

export default Status;