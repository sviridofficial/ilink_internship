import {createEffect, createEvent, createStore} from "effector";
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
    imagePath: string
}

interface headerData {
    username: string,
    lastname: string,
    image: string
}

export const $userStore = createStore<IUserStore>(
    {
        username: "",
        lastname: "",
        date: "",
        city: "",
        sex: "",
        pet: "",
        shortInformation: "",
        aboutMe: "",
        imagePath: ""
    }
);

export const changeUserInformation = createEvent<IUserStore>();
export const changeHeader = createEvent<headerData>();
export const changePhoto = createEvent<string>();
export const getUserInfoFX = createEffect(async () => {
    const url = "https://academtest.ilink.dev/user/getUserProfile";
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req.json();
});
$userStore.on(changeHeader, (_, data) => {
    return {..._, imagePath: data.image, lastname: data.lastname, username: data.username};
})
$userStore.on(changeUserInformation, (_, changedData) => {
    return changedData;
})
$userStore.on(changePhoto, (_, photoPath) => {
    return {..._, imagePath: photoPath}
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
    } else if (compareDates(data.date) != true) {
        return "День рождение должен быть больше текущей даты!"
    }
    return true;
}

export const getYearsOld = (date: Date) => {
    const currentDate = new Date()
    let age = currentDate.getFullYear() - date.getFullYear();
    const m = currentDate.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < date.getDate())) {
        age--;
    }
    return age;
}