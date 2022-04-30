import {createEvent, createStore} from "effector";

export interface INotificaionData {
    isOpen: boolean,
    type: "success" | "error",
    headerValue: string,
    value: string
}

export const $notificationIsOpen = createStore({
    isOpen: false,
    type: "success",
    headerValue: "",
    value: ""
});
export const notificationOpen = createEvent<INotificaionData>();


$notificationIsOpen.on(notificationOpen, (_, notificationData) => {
    return notificationData;
})

