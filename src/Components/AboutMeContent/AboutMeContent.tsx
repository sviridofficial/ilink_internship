import React from "react";
import styles from "./AboutMeContent.module.css";
import {ReactComponent as Photo} from "../../Assets/Camera.svg";
import {ReactComponent as Pencil} from "../../Assets/pencil.svg";
import FormInput from "../FormInput/FormInput";
import DropdownForm from "../DropdownForm/DropdownForm";
import TextareaForm from "../TextareaForm/TextareaForm";

const AboutMeContent: React.FC = () => {
    return (
        <div>
            <h1 className={styles.aboutMeHeaderText}>Обо мне</h1>
            <div className={styles.blockPhoto}>
                <div className={styles.photoContainer}>
                    <div className={styles.photo}><Photo/></div>
                    <div className={styles.changePhoto}>
                        <h1 className={styles.userPhotoText}>Фото профиля</h1>
                        <div className={styles.changePhotoText}>
                            <Pencil className={styles.pencil}/>
                            <p>Изменить фото</p>
                        </div>
                    </div>
                </div>


                <button className={styles.editButton}>Редактировать</button>
            </div>
            <div className={styles.changeFormBlock}>
                <FormInput fieldName={"Имя"}/>
                <FormInput fieldName={"Фамилия"}/>
                <FormInput fieldName={"Дата рождения"}/>
                <DropdownForm fieldName={"Город"}/>
                <DropdownForm fieldName={"Пол"}/>
                <DropdownForm fieldName={"Животное"}/>
            </div>
            <TextareaForm fieldName={"Краткая информация"} type={"Краткая информация"}/>
            <TextareaForm fieldName={"О себе"} type={"О себе"}/>
            <div className={styles.saveButtonContainer}>
                <button className={styles.saveButton}>Сохранить изменения</button>
            </div>
        </div>
    )
}
export default AboutMeContent;