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