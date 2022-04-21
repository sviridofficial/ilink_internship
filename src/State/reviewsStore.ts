import {createEvent, createStore} from "effector";
import {fieldRequired, maxLength20, maxLength200, passwordValidation} from "./validators/authInputsValidators";

interface IInputName {
    name: string,
    validatorErrors: string[]
}

interface IReviewAdd {
    id: number,
    username: string,
    comment: string,
    type: "unpublished" | "rejected" | "published"
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
    id: 1,
    username: "Константин",
    date: "15.06.22",
    comment: "Хороший сайт",
    type: "published"
},
    {
        id: 2,
        username: "Виктор",
        date: "12.06.22",
        comment: "Нормасс!!!",
        type: "rejected"
    },
    {
        id: 3,
        username: "Виктор",
        date: "12.06.22",
        comment: "Нормасс!!!",
        type: "unpublished"
    },
    {
        id: 4,
        username: "Константин",
        date: "14.06.22",
        comment: "Молодец!!!",
        type: "published"
    },
    {
        id: 5,
        username: "Михаил",
        date: "12.06.22",
        comment: "Прикольненька сайт хороший",
        type: "unpublished"
    }
])

export const $reviewInputName = createStore(inputNameInitialState)
export const $reviewInputComment = createStore(inputCommentInitialState)

export const changeInputName = createEvent<string>();
export const changeInputComment = createEvent<string>();
export const addReview = createEvent<IReviewAdd>();
export const rejectReview = createEvent<number>();
export const publishReview = createEvent<number>();

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
        id: _.length + 1,
        username: review.username,
        comment: review.comment,
        date: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear(),
        type: "unpublished"
    }
    array.unshift(newReview);
    return array;
})
$reviews.on(rejectReview, (_, id) => {
    const array = [..._];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array[i].type = "rejected";
        }
    }

    return array;
})

$reviews.on(publishReview, (_, id) => {
    const array = [..._];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array[i].type = "published";
        }
    }
    return array;
})


export const filterPublishReviews = (array: { date: string; comment: string; id: number; type: string; username: string }[]) => {
    return array.filter(element => element.type === "published"
    )
}

export const filterRejectedReviews = (array: { date: string; comment: string; id: number; type: string; username: string }[]) => {
    return array.filter(element => element.type === "rejected"
    )
}

export const filterUnpublishedReviews = (array: { date: string; comment: string; id: number; type: string; username: string }[]) => {
    return array.filter(element => element.type === "unpublished"
    )
}

export const dropDownFiltered = (dropdawnValue: string, array: ({ date: string; comment: string; id: number; type: string; username: string } | { date: string; comment: string; id: number; type: string; username: string } | { date: string; comment: string; id: number; type: string; username: string } | { date: string; comment: string; id: number; type: string; username: string })[]) => {
    let result = [];
    if (dropdawnValue === "unpublished") {
        result.push(...filterUnpublishedReviews(array));
        result.push(...filterRejectedReviews(array));
        result.push(...filterPublishReviews(array));
    } else if (dropdawnValue === "published") {
        result.push(...filterPublishReviews(array));
        result.push(...filterUnpublishedReviews(array));
        result.push(...filterRejectedReviews(array));
    } else {
        result.push(...filterRejectedReviews(array));
        result.push(...filterPublishReviews(array));
        result.push(...filterUnpublishedReviews(array));
    }
    return result;
}