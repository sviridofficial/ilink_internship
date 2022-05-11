import React, {useEffect, useRef, useState} from "react";
import styles from "./AboutMeContent.module.css";
import {ReactComponent as Photo} from "../../Assets/Camera.svg";
import {ReactComponent as Pencil} from "../../Assets/pencil.svg";
import FormInput from "../FormInput/FormInput";
import DropdownForm from "../DropdownForm/DropdownForm";
import TextareaForm from "../TextareaForm/TextareaForm";
import {useStore} from "effector-react";
import {$userStore, changeUserInformation, getYearsOld, validateFields} from "../../State/userStore";
import ErrorEditBlock from "../ErrorEditBlock/ErrorEditBlock";
import {notificationOpen} from "../../State/notifacationStore";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import photo from "../../Pages/MainPage/Components/MainSection/AboutMe/KonstantinPhoto.jpg";
import {getUserInfo} from "../../State/api";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader/Loader";

interface IAboutMeContent {
    setError(value: object): void
}

const AboutMeContent: React.FC<IAboutMeContent> = ({setError}) => {
    const inputRef = useRef(null);
    const auth = useNavigate();
    const userData = useStore($userStore);
    const [isLoading, setIsLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [firsname, setFirstname] = useState(userData.username);
    const [lastname, setLastname] = useState(userData.lastname);
    const [date, setDate] = useState(userData.date);
    const [city, setCity] = useState(userData.city);
    const [sex, setSex] = useState(userData.sex);
    const [pet, setPet] = useState(userData.pet);
    const [shortInformation, setShortInformation] = useState(userData.shortInformation);
    const [aboutMe, setAboutMe] = useState(userData.aboutMe);
    const [image, setImage] = useState("");

    const saveData = () => {
        const newData = {
            username: firsname,
            lastname: lastname,
            date: date,
            city: city,
            sex: sex,
            pet: pet,
            shortInformation: shortInformation,
            aboutMe: aboutMe,
            imagePath: ""
        }
        const checkErrors = validateFields(newData);

        if (checkErrors !== true) {
            setError({isActive: true, errorMessage: checkErrors})
        } else {
            setError({isActive: false, errorMessage: ""})
            notificationOpen({
                isOpen: true,
                type: "success",
                headerValue: "Сохранено",
                value: "Данные успешно отредактированы!"
            });
            changeUserInformation(newData)
            setIsEdit(false);
        }
    }
    const changePhotoClick = () => {
        // @ts-ignore
        inputRef.current.click();
    }
    useEffect(() => {
        const request = async () => {
            const result = await getUserInfo();
            if (result.statusCode === 401) {
                auth("/");
            } else {
                const birthday = new Date(result.birthDate);
                setFirstname(result.firstName);
                setLastname(result.lastName);
                setDate(birthday.getDate() + "." + (birthday.getMonth() + 1) + "." + birthday.getFullYear())
                setAboutMe(result.aboutMe);
                setPet(result.hasPet ? "Есть" : "Нет");
                setSex(result.gender === "male" ? "Мужчина" : "Женщина");
                setCity(result.cityOfResidence == "Tomsk" ? "Томск" : result.cityOfResidence);
                setShortInformation(result.smallAboutMe == null ? "" : result.smallAboutMe);
                setImage("https://academtest.ilink.dev/images/" + result.profileImage)
            }
            setIsLoading(false);
        }
        request();
    }, [])
    return (
        <div>
            <h1 className={styles.aboutMeHeaderText}>Обо мне</h1>
            {isLoading ? <Loader/> :
                <div>
                    <div className={styles.blockPhoto}>
                        <div className={styles.photoContainer}>
                            <img src={image} className={styles.photo}/>
                            <div className={styles.hoverPhoto}><img src={image} className={styles.photo}/></div>
                            <div className={styles.changePhoto}>
                                <h1 className={styles.userPhotoText}>Фото профиля</h1>
                                <div className={styles.changePhotoText} onClick={changePhotoClick}>
                                    <Pencil className={styles.pencil}/>
                                    <input type='file' id="real-file" hidden={true} ref={inputRef} onChange={(e) => {
                                        // @ts-ignore
                                        console.log(e.target.files[0].name);
                                    }}/>
                                    <p>Изменить фото</p>
                                </div>

                            </div>
                        </div>
                        <button onClick={() => {
                            setIsEdit(true)
                        }} className={isEdit === true ? styles.none : styles.editButton}>Редактировать
                        </button>
                    </div>
                    <div className={styles.changeFormBlock}>
                        <FormInput fieldName={"Имя"} value={firsname} setValue={setFirstname} isEdit={isEdit}/>
                        <FormInput fieldName={"Фамилия"} value={lastname} setValue={setLastname} isEdit={isEdit}/>
                        <FormInput fieldName={"Дата рождения"} value={date} setValue={setDate} isEdit={isEdit}/>
                        <DropdownForm fieldName={"Город"} type={"city"} value={city} setValue={setCity}
                                      isEdit={isEdit}/>
                        <DropdownForm fieldName={"Пол"} type={"sex"} value={sex} setValue={setSex} isEdit={isEdit}/>
                        <DropdownForm fieldName={"Животное"} type={"pet"} value={pet} setValue={setPet}
                                      isEdit={isEdit}/>
                    </div>
                    <TextareaForm fieldName={"Краткая информация"} type={"Краткая информация"} value={shortInformation}
                                  setValue={setShortInformation} isEdit={isEdit}/>
                    <TextareaForm fieldName={"О себе"} type={"О себе"} value={aboutMe} setValue={setAboutMe}
                                  isEdit={isEdit}/>
                    <div className={isEdit === false ? styles.none : styles.saveButtonContainer}>
                        <button className={styles.saveButton} onClick={saveData}>Сохранить изменения</button>
                    </div>
                </div>}
        </div>
    )
}
export default AboutMeContent;