import {useStore} from "effector-react";
import {createEvent, createStore} from "effector";
import {compareDates, dateValidation, fieldRequired, usernameValidation} from "./validators/authInputsValidators";

interface IUserStore {
    username: string,
    lastname: string,
    date: string,
    city: string,
    sex: string,
    pet: string,
    shortInformation: string,
    aboutMe: string,
}

export const $userStore = createStore<IUserStore>(
    {
        username: "Константин",
        lastname: "Свиридов",
        date: "15.06.2001",
        city: "Кемерово",
        sex: "мужчина",
        pet: "нет",
        shortInformation: "Только рыба с закрытым ртом никогда не попадется на крючок",
        aboutMe: "Всем привет! Меня зовут Константин, мне 20 лет, я студент Томского Политехнического Университета. Учусь на направлении \"Программная инженерия\", в свободное от учёбы время создаю веб-приложения. Недавно я создал сайт для Томской компании.",
    }
);

export const changeUserInformation = createEvent<IUserStore>();

$userStore.on(changeUserInformation, (_, changedData) => {
    return changedData;
})

export const validateFields = (data: IUserStore) => {
    if (fieldRequired(data.username) != true || fieldRequired(data.lastname) != true || fieldRequired(data.date) != true || fieldRequired(data.aboutMe) != true) {
        return "Имеются незаполненные поля!";
    } else if (usernameValidation(data.username) != true || usernameValidation(data.lastname) != true) {
        return "Имя и фамилия должны содержать только буквы!";
    } else if (data.shortInformation.length > 99) {
        return "Максимальная длина краткой информации 99 символов"
    } else if (data.aboutMe.length > 300) {
        return "Максимальная длина информации о себе 300 символов";
    } else if (dateValidation(data.date) != true) {
        return "Формат даты должен быть дд.мм.гггг";
    } else if (compareDates(data.date)!=true) {
        return "День рождение должен быть больше текущей даты!"
    }
    return true;
}