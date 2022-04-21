import React, {ChangeEvent, useState} from "react";
import styles from "./Dropdown.module.css";

interface IDropdawnProps {
    selected: string,
    type: "Students" | "Reviews",

    setSelect(value: string): void
}

const Dropdown: React.FC<IDropdawnProps> = ({selected, setSelect, type}) => {
    if (type == "Students") {
        return (
            <select onChange={(e) => {
                setSelect(e.target.value)
            }
            } name={"select"} value={selected}>
                <option value={"all"}>Все</option>
                <option value={"expelled"}>Отчислен</option>
                <option value={"isStudying"}>Обучается</option>
                <option value={"finished"}>Закончил</option>
            </select>)
    } else {
        return (
            <select onChange={(e) => {
                setSelect(e.target.value)
            }
            } name={"select"} value={selected} className={styles.studentsList}>
                <option value={"unpublished"}>Сначала неопубликованные</option>
                <option value={"rejected"}>Сначала отклоненные</option>
                <option value={"published"}>Сначала опубликованные</option>
            </select>
        )
    }
}

export default Dropdown;

