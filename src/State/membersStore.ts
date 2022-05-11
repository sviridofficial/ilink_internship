import {createEvent, createStore} from "effector";
import {IStatusProps} from "../Components/Status/Status";


export interface membersStore {
    studentName: string,
    smallAboutMe: string,
    studentStatus: "studies" | "Закончил" | "Отчислен",
    profileImage: string|null
}

export type listMembers = membersStore[];

//Стор сделан специально таким большим для демонстрации пагинации по странице!
export const $students = createStore<membersStore[]>([

    ]
);
export const setMembers = createEvent<membersStore[]>();
$students.on(setMembers, (_, users) => {
    return users;
})
export const filter = (array: membersStore[], state: string) => {
    if (state === "isStudying") {
        return array.filter((element) => (element.studentStatus === "studies"))
    } else if (state === "expelled") {
        return array.filter((element) => (element.studentStatus === "Отчислен"))
    } else if (state === "finished") {
        return array.filter((element) => (element.studentStatus === "Закончил"))
    }
    return array;
}

