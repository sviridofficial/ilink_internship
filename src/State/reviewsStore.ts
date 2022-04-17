import {createStore} from "effector";

export const $reviews = createStore([{
    username: "Константин",
    date: "15.06.22",
    comment: "Хороший сайт"
},
    {
        username: "Виктор",
        date: "12.06.22",
        comment: "Нормасс!!!"
    },
    {
        username: "Константин",
        date: "14.06.22",
        comment: "Молодец!!!"
    }
])