import {$login, $password} from "./authStore";

export const userAuthFx = async () => {
    const url = "https://academtest.ilink.dev/user/signIn"

    const req = await fetch(url, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: new URLSearchParams({
            'email': $login.getState().loginState,
            'password': $password.getState().passwordState
        })
    })
    return req.json();
}

export const updatePhoto = async (id: string, span: File[]) => {
    const urlString = `https://academtest.ilink.dev/reviews/updatePhoto/${id}`;
    const data = new FormData()
    data.append("authorImage", span[0]);
    const request = await fetch(urlString, {
        method: "POST",
        body: data
    })
    return request;
}

export const createReview = async (authorName: string, text: string, captchaKey: string, captchaValue: string) => {
    const url = "https://academtest.ilink.dev/reviews/create";
    const request = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            'authorName': authorName,
            'title': "wd",
            "text": text,
            'captchaKey': captchaKey,
            "captchaValue": captchaValue
        })
    })
    return request;
}

export const getUserInfo = async () => {
    const url = "https://academtest.ilink.dev/user/getUserProfile";
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req.json();
}

export const getAllReviews = async () => {
    const url = "https://academtest.ilink.dev/reviews/getAll";
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req.json();
}

export const getCaptcha = async () => {
    const url = "https://academtest.ilink.dev/reviews/getCaptcha";
    const req = await fetch(url, {
        method: "GET"
    })
    return req;
}

export const getAllUsers = async () => {
    const url = "https://academtest.ilink.dev/user/getAll"
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req;
}

export const editReviews = async (reviewId: string, updatedText: string) => {
    const url = `https://academtest.ilink.dev/reviews/updateInfo/${reviewId}`
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: new URLSearchParams({
            text: updatedText
        })
    })
    return req;
}

export const changeReviewState = async (reviewId: string, status: string) => {
    const url = `https://academtest.ilink.dev/reviews/updateStatus/${reviewId}`
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: new URLSearchParams({
            "status": status
        })
    })
    return req;
}

export const updateUserPhoto = async (span: File) => {
    const urlString = `https://academtest.ilink.dev/user/updatePhoto`;
    const data = new FormData()
    data.append("profileImage", span);
    const request = await fetch(urlString, {
        method: "POST",
        headers: {"authorization": `Bearer ${localStorage.getItem("token")}`},
        body: data
    })
    return request;
}