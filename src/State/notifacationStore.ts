import {createEvent, createStore} from "effector";

export const $notificationIsOpen = createStore({
    isOpen: false,
    type: "success"
});
export const notificationOpen = createEvent();
export const notificationClose = createEvent();
export const setNotificationType = createEvent<string>();

$notificationIsOpen.on(notificationOpen, (_) => {

    return {..._, isOpen: true};
})

$notificationIsOpen.on(notificationClose, (_) => {

    return {..._, isOpen: false};
})

$notificationIsOpen.on(setNotificationType, (_, type) => {
    return {..._, type: type}
})

