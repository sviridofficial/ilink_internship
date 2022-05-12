import React from "react";
import styles from "./DropdownForm.module.css";

interface IDropdownForm {
    fieldName: string,
    type: "city" | "sex" | "pet",
    value: string,
    isEdit: boolean

    setValue(value: string): void
}

const DropdownForm: React.FC<IDropdownForm> = ({fieldName, type, value, setValue, isEdit}) => {
    if (type === "city") {
        return (
            <div>
                <p className={styles.dropdownName}>{fieldName}</p>
                <select disabled={!isEdit} value={value} onChange={(event) => setValue(event.target.value)}
                        className={styles.dropdown}>
                    <option value={"Кемерово"}>Кемерово</option>
                    <option value={"Томск"}>Томск</option>
                    <option value={"Москва"}>Москва</option>
                </select>
            </div>
        )
    } else if (type === "sex") {
        return (
            <div>
                <p className={styles.dropdownName}>{fieldName}</p>
                <select disabled={!isEdit} value={value} onChange={(event) => setValue(event.target.value)} className={styles.dropdown}>
                    <option value={"Мужчина"}>Мужчина</option>
                    <option value={"Женщина"}>Женщина</option>
                </select>
            </div>
        )
    } else {
        return (
            <div>
                <p className={styles.dropdownName}>{fieldName}</p>
                <select disabled={!isEdit} value={value} onChange={(event) => setValue(event.target.value)} className={styles.dropdown}>
                    <option value={"Есть"}>Есть</option>
                    <option value={"Нет"}>Нет</option>
                </select>
            </div>
        )
    }
}
export default DropdownForm;