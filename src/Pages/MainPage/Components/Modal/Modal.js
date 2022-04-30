import React, {useEffect, useState} from "react";
import './Modal.css';
import cancel from './cancel.svg';
import CustomTextarea from "./CustomInputField/CustomTextarea";
import FileInput from "./FileInputCustom/FileInput";
import CustomInput from "./CustomInputField/СustomInput";
import jpgIcon from './jpgIcon.svg';
import info from './Info Square.svg'
import reset from "../../../../Assets/reset.svg";
import {useStore} from "effector-react";
import {$reviewInputComment, $reviewInputName, addReview} from "../../../../State/reviewsStore";
import {
    $notificationIsOpen,
    notificationOpen
} from "../../../../State/notifacationStore";
import CapthaInput from "../../../../Components/CapthaInput/CapthaInput";
import {$login, $password} from "../../../../State/authStore";
import Loader from "../../../../Components/Loader/Loader";

const Modal = (props) => {
    const [loading, setLoading] = useState(false);
    const [captchaImage, setCaptchaImage] = useState("");
    const [captchaValue, setCaptchaValue] = useState("");
    const [captchaKey, setCaptchaKey] = useState("")
    const [span, setSpan] = useState(null);
    const deleteImg = () => {
        setSpan(false);
    }
    const name = useStore($reviewInputName);
    const comment = useStore($reviewInputComment);
    const notification = useStore($notificationIsOpen);
    const onSubmit = async (event) => {
        event.preventDefault();
        if ((name.validatorErrors.length != 0 || comment.validatorErrors.length != 0) || name.name.length == 0 || comment.comment.length == 0) {
            notificationOpen({
                isOpen: true,
                type: "error",
                value: "Ошибка валидации!",
                headerValue: "Что-то пошло не так..."
            });
        } else {
            setLoading(true)
            const url = "https://academtest.ilink.dev/reviews/create";
            const request = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    'authorName': name.name,
                    'title': "wd",
                    "text": comment.comment,
                    'captchaKey': captchaKey,
                    "captchaValue": captchaValue
                })
            }).then(response => {
                if (response.status < 400) {
                    props.setActive(false);
                    notificationOpen({
                        isOpen: true,
                        type: "success",
                        value: "Успешно",
                        headerValue: "Отзыв отправлен!"
                    })
                    setLoading(false)
                } else {
                    response.json().then(data => {
                        notificationOpen({
                            isOpen: true,
                            type: "error",
                            value: data.response.message,
                            headerValue: "Ошибка данных..."
                        })
                        props.setActive(false)
                        setLoading(false)
                    })
                }
            })
        }
    }

    const resetCaptcha = () => {
        const request = async () => {
            const url = "https://academtest.ilink.dev/reviews/getCaptcha";
            const req = await fetch(url, {
                method: "GET"
            }).then(response => response.json().then(data => {
                setCaptchaImage(data.base64Image);
                setCaptchaKey(data.key)
            }))
        }
        request();

    }

    useEffect(() => {
        const request = async () => {
            const url = "https://academtest.ilink.dev/reviews/getCaptcha";
            const req = await fetch(url, {
                method: "GET"
            }).then(response => response.json().then(data => {
                setCaptchaImage(data.base64Image)
                setCaptchaKey(data.key)
            }))
        }
        request();

    }, [])
    debugger;
    if (!loading) {
        return (
            <div className={props.active ? "modal active" : "modal"} onClick={() => {
                props.setActive(false)
            }}>
                <div className={props.active ? "modal_content active" : "modal_content"}
                     onClick={e => e.stopPropagation()}>
                    <div className="modal_header">
                        <p className="modal_reviews">Отзыв</p>
                        <img className='cancelImage' src={cancel} onClick={() => props.setActive(false)}/>
                    </div>
                    <p className="whatIsYourName">Как вас зовут?</p>
                    <form onSubmit={onSubmit}>
                        <div className="nameAndPhotoInputs">
                            <CustomInput name={"userName"} placeholder={"Имя Фамилия"}/>
                            <FileInput span={span} setSpan={setSpan}/>
                        </div>

                        {span ?
                            <div className="file">
                                <img src={jpgIcon}/>
                                <div className="fileOutput">
                                    <span id="custom-text">{span}</span>
                                    <div className="straight"></div>
                                </div>
                                <svg onClick={deleteImg} id="deleteImage" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M16.3694 7.90705C16.3694 7.96371 15.9253 13.581 15.6716 15.9451C15.5127 17.3959 14.5775 18.2759 13.1746 18.3009C12.0966 18.325 11.0414 18.3333 10.0032 18.3333C8.901 18.3333 7.82309 18.325 6.77678 18.3009C5.42088 18.2684 4.4848 17.3709 4.33406 15.9451C4.07309 13.5727 3.63706 7.96371 3.62895 7.90705C3.62085 7.73622 3.67596 7.57373 3.78781 7.44206C3.89803 7.3204 4.05688 7.24707 4.22383 7.24707H15.7826C15.9488 7.24707 16.0995 7.3204 16.2186 7.44206C16.3297 7.57373 16.3856 7.73622 16.3694 7.90705Z"
                                          fill="#EB5757"/>
                                    <path
                                        d="M17.5 4.98068C17.5 4.63819 17.2301 4.36986 16.9059 4.36986H14.4762C13.9818 4.36986 13.5522 4.01821 13.442 3.52239L13.3059 2.91492C13.1154 2.18077 12.4581 1.66663 11.7206 1.66663H8.2802C7.53458 1.66663 6.88378 2.18077 6.68603 2.95491L6.55879 3.52323C6.44775 4.01821 6.01821 4.36986 5.52464 4.36986H3.09488C2.76988 4.36986 2.5 4.63819 2.5 4.98068V5.29733C2.5 5.63149 2.76988 5.90814 3.09488 5.90814H16.9059C17.2301 5.90814 17.5 5.63149 17.5 5.29733V4.98068Z"
                                        fill="#EB5757"/>
                                </svg>
                            </div> : null}


                        <p className="everythingLike">Все ли вам понравилось?</p>
                        <CustomTextarea name="comment"
                                        placeholder={'Напишите пару слов о вашем опыте...'}></CustomTextarea>
                        <div className={"capthaBlock"}>

                            <div className={"captcha"}>
                                <div>
                                    <p>Введите код с картинки:</p>
                                    <CapthaInput value={captchaValue} setValue={setCaptchaValue}/>
                                </div>
                                <div className={"captchaX"}>
                                    <img className={"captchaImage"} src={captchaImage}/>
                                    <div onClick={resetCaptcha} className={"resetCaptchaBlock"}>
                                        <img src={reset}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footerModal'>
                            <button type={"submit"} className="sendButton">Отправить отзыв</button>
                            <div className='fMod'>
                                <img className='info' src={info} width={15.42} height={15.42}/>
                                <p className='moderation'>Все отзывы проходят модерацию в течение 2 часов</p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    } else {
        return (
            <div className={props.active ? "modal active" : "modal"} onClick={() => {
                props.setActive(false)
            }}>
                <div className={props.active ? "modal_content active" : "modal_content"}
                     onClick={e => e.stopPropagation()}>
                    <div className="modal_header">
                        <p className="modal_reviews">Отзыв</p>
                        <img className='cancelImage' src={cancel} onClick={() => props.setActive(false)}/>
                    </div>
                    <Loader/>
                </div>
            </div>
        )
    }
}
export default Modal;