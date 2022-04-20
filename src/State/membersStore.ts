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
            studentName: "1",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "2",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "3",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Закончил"
        },
        {
            studentName: "4",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "5",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "6",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "7",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "8",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "1",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "2",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "3",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Закончил"
        },
        {
            studentName: "4",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "5",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Обучается"
        },
        {
            studentName: "6",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "7",
            studentDescription: "Студент Программной Инженерии Томского Политехнического Университета",
            studentStatus: "Отчислен"
        },
        {
            studentName: "8",
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

