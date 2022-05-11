import {createEffect, createEvent, createStore} from "effector";
import {fieldRequired, maxLength20, maxLength200} from "./validators/authInputsValidators";

interface IInputName {
    name: string,
    validatorErrors: string[]
}

interface IEditComment {
    id: string,
    text: string
}

interface IReviewAdd {
    id: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: null | string,
    version?: number,
    authorImage: string,
    authorName: string,
    title?: string,
    text: string,
    status: "onCheck" | "declined" | "approved"
}

type IReviews = IReviewAdd[] | never[];
const reviewsInitialState: IReviews = [];

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


export const $reviews = createStore(reviewsInitialState);

export const $reviewInputName = createStore(inputNameInitialState)
export const $reviewInputComment = createStore(inputCommentInitialState)

export const changeInputName = createEvent<string>();
export const changeInputComment = createEvent<string>();
export const addReview = createEvent<IReviewAdd>();
export const rejectReview = createEvent<string>();
export const publishReview = createEvent<string>();
export const editReview = createEvent<IEditComment>();
export const setAllReviews = createEvent<IReviewAdd[]>()
export const getAllReviewsFx = createEffect(async () => {
    const url = "https://academtest.ilink.dev/reviews/getAll";
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req.json();
});
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
        id: (_.length + 1).toString(),
        authorName: review.authorName,
        text: review.text,
        createdAt: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear(),
        status: review.status,
        authorImage: ""
    }
    array.unshift(newReview);
    return array;
})
$reviews.on(rejectReview, (_, id) => {
    const array = [..._];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array[i].status = "declined";
        }
    }

    return array;
})

$reviews.on(publishReview, (_, id) => {
    const array = [..._];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array[i].status = "approved";
        }
    }
    return array;
})


$reviews.on(editReview, (_, element) => {
    const array = [..._];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === element.id) {
            array[i].text = element.text;
        }
    }

    return array;
})

$reviews.on(setAllReviews, (_, data) => {
    return data;
})
export const filterPublishReviews = (array: IReviewAdd[]) => {
    return array.filter(element => element.status === "approved"
    )
}

export const filterRejectedReviews = (array: IReviewAdd[]) => {
    return array.filter(element => element.status === "declined"
    )
}

export const filterUnpublishedReviews = (array: IReviewAdd[]) => {
    return array.filter(element => element.status === "onCheck"
    )
}

export const dropDownFiltered = (dropdawnValue: string, array: IReviewAdd[]) => {
    let result = [];
    if (dropdawnValue === "onCheck") {
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