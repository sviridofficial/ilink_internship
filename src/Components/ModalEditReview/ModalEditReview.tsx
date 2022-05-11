import React, {useState} from "react";
import styles from "./ModalEditReview.module.css";
import cancel from "../../Pages/MainPage/Components/Modal/cancel.svg";
import CustomTextarea from "../../Pages/MainPage/Components/Modal/CustomInputField/CustomTextarea";
import {editReview} from "../../State/reviewsStore";
import {Simulate} from "react-dom/test-utils";
import {fieldRequired, maxLength200} from "../../State/validators/authInputsValidators";
import {notificationOpen} from "../../State/notifacationStore";
import {editReviews} from "../../State/api";
import Loader from "../Loader/Loader";

interface IModalEditReview {
    active: boolean,
    id: string,
    comment: string

    setActive(value: boolean): void
}

const ModalEditReview: React.FC<IModalEditReview> = ({active, setActive, id, comment}) => {
    const [textAreaValue, setTextAreaValue] = useState(comment);
    const [isLoading, setIsLoading] = useState(false);
    const submitEdit = async () => {
        setIsLoading(true);
        if (maxLength200(textAreaValue) != true || fieldRequired(textAreaValue) != true) {

        } else {
            const request = await editReviews(id, textAreaValue).then(response => {
                if (response.ok) {
                    editReview({id: id, text: textAreaValue});
                    setActive(false);
                    notificationOpen({
                        type: "success",
                        isOpen: true,
                        value: "Отзыв успешно отредактирован!",
                        headerValue: "Отзыв изменен"
                    });
                } else {
                    setActive(false);
                    notificationOpen({
                        type: "error",
                        isOpen: true,
                        headerValue: "Ошибка!",
                        value: "Не получилось изменить отзыв..."
                    });
                }
            })


            setIsLoading(false)
        }
    }
    const cancelClick = () => {
        setTextAreaValue(comment);
        setActive(false)
    }

    return (
        <div className={active ? styles.modal + " " + styles.active : styles.modal} onClick={() => {
            setActive(false)
        }}>
            <div className={active ? styles.modal_content + " " + styles.active : styles.modal_content}
                 onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <p className="modal_reviews">Редактирование отзыва</p>
                    <img className='cancelImage' src={cancel} onClick={() => {
                        setTextAreaValue(comment);
                        setActive(false)
                    }}/>
                </div>
                <p className={styles.reviewText}>Отзыв</p>
                {isLoading ? <Loader/> : <div>
                    <CustomTextarea type={"editReview"} name="comment" value={textAreaValue}
                                    setValue={setTextAreaValue}
                                    placeholder={'Напишите пару слов о вашем опыте...'}></CustomTextarea>
                    <div className={styles.buttons}>
                        <button onClick={submitEdit} className={styles.submit}>Подтвердить редактирование</button>
                        <button onClick={cancelClick} className={styles.refuse}>Отмена</button>
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default ModalEditReview;