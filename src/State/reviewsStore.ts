import {createEvent, createStore} from "effector";
import {fieldRequired, maxLength20, maxLength200, passwordValidation} from "./validators/authInputsValidators";

interface IInputName {
    name: string,
    validatorErrors: string[]
}

interface IReviewAdd {
    username: string,
    comment: string
}

interface IInputComment {
    comment: string,
    validatorErrors: string[]
}

const inputNameInitialState: IInputName = {
    name: "",
    validatorErrors: []
}

const inputCommentInitialState: IInputComment = {
    comment: "",
    validatorErrors: []
}


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

export const $reviewInputName = createStore(inputNameInitialState)
export const $reviewInputComment = createStore(inputCommentInitialState)

export const changeInputName = createEvent<string>();
export const changeInputComment = createEvent<string>();
export const addReview = createEvent<IReviewAdd>();

$reviewInputName.on(changeInputName, (_, nameValue) => {
    const errors: any[] = [];
    if (fieldRequired(nameValue) != true) {
        errors.push(fieldRequired(nameValue));
    }
    if (maxLength20(nameValue) != true) {
        errors.push(maxLength20(nameValue));
    }
    return {name: nameValue, validatorErrors: errors};
})

$reviewInputComment.on(changeInputComment, (_, commentValue) => {
    const errors: any[] = [];
    if (fieldRequired(commentValue) != true) {
        errors.push(fieldRequired(commentValue));
    }
    if (maxLength200(commentValue) != true) {
        errors.push(maxLength200(commentValue));
    }
    return {comment: commentValue, validatorErrors: errors};
})

$reviews.on(addReview, (_, review) => {
    const array = [..._];
    const newReview = {
        username: review.username,
        comment: review.comment,
        date: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear()
    }
    array.unshift(newReview);
    return array;
})