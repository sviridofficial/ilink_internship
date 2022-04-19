import React from "react";
import styles from "./Dropdown.module.css";
const Dropdown: React.FC = () => {
    return (
       <select name={"select"} className={styles.select}>
           <option>Все</option>
           <option>Отчислен</option>
           <option>Обучается</option>
           <option>Закончил</option>
       </select>
    )
}

export default Dropdown;

