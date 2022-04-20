import React, {ChangeEvent, useState} from "react";
import styles from "./Dropdown.module.css";

interface IDropdawnProps {
    selected: string,

    setSelect(value: string): void
}

const Dropdown: React.FC<IDropdawnProps> = ({selected, setSelect}) => {

    return (
        <select onChange={(e) => {
            setSelect(e.target.value)
        }
        } name={"select"} value={selected} className={styles.select}>
            <option value={"all"}>Все</option>
            <option value={"expelled"}>Отчислен</option>
            <option value={"isStudying"}>Обучается</option>
            <option value={"finished"}>Закончил</option>
        </select>
    )
}

export default Dropdown;

