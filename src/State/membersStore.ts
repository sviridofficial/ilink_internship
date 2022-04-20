import {createStore} from "effector";
import {IStatusProps} from "../Components/Status/Status";

export interface membersStore {
    studentName: string,
    studentDescription: string,
    studentStatus: "Обучается" | "Зачислен" | "Отчислен";
}

export type listMembers = membersStore[];

//Стор сделан специально таким большим для демонстрации пагинации по странице!
export const $membersStore = createStore<membersStore[]>([
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
            studentStatus: "Зачислен"
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
            studentStatus: "Зачислен"
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
            studentStatus: "Зачислен"
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
        }, {
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
            studentStatus: "Зачислен"
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

