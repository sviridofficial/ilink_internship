import React, {useState} from "react";
import styles from "./ModalEditReview.module.css";
import cancel from "../../Pages/MainPage/Components/Modal/cancel.svg";
import CustomTextarea from "../../Pages/MainPage/Components/Modal/CustomInputField/CustomTextarea";
import {editReview} from "../../State/reviewsStore";

interface IModalEditReview {
    active: boolean,
    id: number,
    comment: string

    setActive(value: boolean): void
}

const ModalEditReview: React.FC<IModalEditReview> = ({active, setActive, id, comment}) => {
    const [textAreaValue, setTextAreaValue] = useState(comment);
    const submitEdit = () => {
        editReview({id: id, comment: textAreaValue});
        setActive(false);
    }
    return (
        <div className={active ? styles.modal + " " + styles.active : styles.modal} onClick={() => {
            setActive(false)
        }}>
            <div className={active ? styles.modal_content + " " + styles.active : styles.modal_content}
                 onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <p className="modal_reviews">Редактирование отзыва</p>
                    <img className='cancelImage' src={cancel} onClick={() => setActive(false)}/>
                </div>
                <p className={styles.reviewText}>Отзыв</p>
                <CustomTextarea type={"editReview"} name="comment" value={textAreaValue}
                                setValue={setTextAreaValue}
                                placeholder={'Напишите пару слов о вашем опыте...'}></CustomTextarea>
                <div className={styles.buttons}>
                    <button onClick={submitEdit} className={styles.submit}>Подтвердить редактирование</button>
                    <button className={styles.refuse}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default ModalEditReview;