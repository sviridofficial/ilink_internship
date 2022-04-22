import React from "react";
import styles from "./DropdownForm.module.css";

interface IDropdownForm {
    fieldName: string
}

const DropdownForm: React.FC<IDropdownForm> = ({fieldName}) => {
    return (
        <div>
            <p className={styles.dropdownName}>{fieldName}</p>
            <select className={styles.dropdown}>
                <option>Кемерово</option>
                <option>Томск</option>
                <option>Москва</option>
            </select>
        </div>
    )
}
export default DropdownForm;