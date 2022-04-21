import {createStore} from "effector";
import {IStatusProps} from "../Components/Status/Status";


export interface membersStore {
    studentName: string,
    studentDescription: string,
    studentStatus: "Обучается" | "Закончил" | "Отчислен";
}

export type listMembers = membersStore[];

//Стор сделан специально таким большим для демонстрации пагинации по странице!
export const $students = createStore<membersStore[]>([
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Закончил"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Закончил"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "Свиридов Константин",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        }
    ]
);

export const filter = (array: membersStore[], state: string) => {
    if (state === "isStudying") {
        return array.filter((element) => (element.studentStatus === "Обучается"))
    }
    else if(state==="expelled"){
        return array.filter((element) => (element.studentStatus === "Отчислен"))
    }
    else if(state==="finished"){
        return array.filter((element) => (element.studentStatus === "Закончил"))
    }
    return array;
}

