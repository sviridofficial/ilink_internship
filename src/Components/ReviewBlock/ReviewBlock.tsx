import React, {useState} from "react";
import styles from "./ReviewBlock.module.css";
import {ReactComponent as Edit} from "../../Assets/Edit.svg";
import {publishReview, rejectReview} from "../../State/reviewsStore";
import {ReactComponent as RejectedLogo} from "../../Assets/Close Square.svg";
import {ReactComponent as PublishedLogo} from "../../Assets/published.svg";
import ModalEditReview from "../ModalEditReview/ModalEditReview";
import {ReactComponent as EmptyPhoto} from "../../Assets/Camera.svg";

interface IReviewProps {
    id: string,
    username: string,
    createdAt: string,
    comment: string,
    type: string,
    authorImage: string
}

const ReviewBlock: React.FC<IReviewProps> = ({id, username, createdAt, comment, type, authorImage}) => {
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
            <div>
                <div className={styles.reviewHeader}>
                    <div className={styles.reviewHeaderUserInformation}>
                        <div className={styles.photo}>
                            {authorImage != null ? <img className={styles.userPhoto}
                                                        src={"https://academtest.ilink.dev/images/" + authorImage}/>
                                : <div className={styles.photoUserNull}><EmptyPhoto/></div>}

                        </div>
                        <p className={styles.userName}>{username}</p>
                    </div>
                    <p className={styles.date}>{new Date(createdAt).getDate() + "." + (new Date(createdAt).getMonth() + 1) + "." + new Date(createdAt).getFullYear()}</p>
                </div>
                <p className={styles.comment}>{comment}</p>
            </div>
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