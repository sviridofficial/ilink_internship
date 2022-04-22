export const fieldRequired = (value: string): string | boolean => {
    if (value && value.length > 0) {
        return true;
    }
    return "Обязательное поле!";
}

export const emailValidation = (value: string): string | boolean => {
    const regexp: RegExp = /^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$/g;
    if (value.match(regexp)) return true;
    return "Поле должно соответствовать условиям почты";
}

export const passwordValidation = (value: string): string | boolean => {
    const regexp: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/g;
    if (value.match(regexp)) return true;
    return "Поле должно соответствовать условиям пароля";
}

export const maxLength20 = (value: string) => {
    if (value.length > 20) return "Длина больше 20 символов";
    return true;
}
export const maxLength200 = (value: string) => {
    if (value.length > 200) return "Длина больше 200 символов";
    return true;
}

export const usernameValidation = (value: string) => {
    const regexp: RegExp = /^[a-zA-ZА-Яа-я]+$/g;
    if (value.match(regexp)) return true;
    return "Имя или Фамилия состоит из некорректных символов";
}

export const dateValidation = (value: string) => {
    const regexp: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
    if (value.match(regexp)) return true;
    return "Некорректный формат даты";
}

export const compareDates = (value: string) => {
    const [day, month, year] = value.split('.');
    const date = new Date(+parseInt(year), parseInt(month) - 1, +parseInt(day));
    const currentDate = new Date();
    if (date > currentDate) {
        return "Больше текущей даты";
    }
    return true;
}