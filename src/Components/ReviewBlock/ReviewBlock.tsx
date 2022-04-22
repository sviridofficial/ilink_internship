import React, {useState} from "react";
import styles from "./ReviewBlock.module.css";
import {ReactComponent as Edit} from "../../Assets/Edit.svg";
import {publishReview, rejectReview} from "../../State/reviewsStore";
import {ReactComponent as RejectedLogo} from "../../Assets/Close Square.svg";
import {ReactComponent as PublishedLogo} from "../../Assets/published.svg";
import ModalEditReview from "../ModalEditReview/ModalEditReview";

interface IReviewProps {
    id: number,
    username: string,
    date?: string,
    comment: string,
    type: string
}

const ReviewBlock: React.FC<IReviewProps> = ({id, username, date, comment, type}) => {
    const [modalActive, setModalActive] = useState(false);
    const rejectClick = () => {
        rejectReview(id);
    }
    const publishClick = () => {
        publishReview(id);
    }
    const editClick = () => {
        setModalActive(true);
    }
    return (
        <div
            className={type === "rejected" ? styles.reviewBlockRejected : type === "published" ? styles.reviewBlockPublished : styles.reviewBlock}>
            <div className={styles.reviewHeader}>
                <div className={styles.reviewHeaderUserInformation}>
                    <div className={styles.photo}/>
                    <p className={styles.userName}>{username}</p>
                </div>
                <p className={styles.date}>{date}</p>
            </div>
            <p className={styles.comment}>{comment}</p>
            {type === "rejected" ?
                <div className={styles.rejected}>
                    <RejectedLogo/>
                    <p className={styles.rejectedText}>Отзыв отклонен</p>
                </div> : type === "published" ?
                    <div className={styles.published}>
                        <PublishedLogo/>
                        <p className={styles.publishedText}>Отзыв опубликован</p>
                    </div>
                    :
                    <div className={styles.buttons}>
                        <div className={styles.leftButtons}>
                            <button onClick={publishClick} className={styles.submit}>Опубликовать</button>
                            <button onClick={rejectClick} className={styles.refuse}>Отклонить</button>
                        </div>
                        <button onClick={editClick} className={styles.edit}><Edit/></button>
                    </div>}
            <ModalEditReview comment={comment} id={id} active={modalActive} setActive={setModalActive}/>
        </div>
    )
}
export default ReviewBlock;