import React, {useState} from "react";
import styles from "./ReviewBlock.module.css";
import {ReactComponent as Edit} from "../../Assets/Edit.svg";
import {publishReview, rejectReview} from "../../State/reviewsStore";
import {ReactComponent as RejectedLogo} from "../../Assets/Close Square.svg";
import {ReactComponent as PublishedLogo} from "../../Assets/published.svg";
import ModalEditReview from "../ModalEditReview/ModalEditReview";
import {ReactComponent as EmptyPhoto} from "../../Assets/Camera.svg";
import {changeReviewState} from "../../State/api";
import {useNavigate} from "react-router-dom";
import {notificationOpen} from "../../State/notifacationStore";
import Loader from "../Loader/Loader";

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
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const rejectClick = async () => {
        setIsLoading(true);
        const response = await changeReviewState(id, "declined").then(response => {
            if (response.ok) {
                rejectReview(id);
                notificationOpen({isOpen: true, type: "success", headerValue: "Успешно!", value: "Отзыв отклонен..."})
                setIsLoading(false);
            } else {
                navigation("/");
            }
        })
    }
    const publishClick = async () => {
        setIsLoading(true);
        const response = await changeReviewState(id, "approved").then(response => {
            if (response.ok) {
                publishReview(id);
                notificationOpen({isOpen: true, type: "success", headerValue: "Успешно!", value: "Отзыв опубликован..."})
                setIsLoading(false);
            } else {
                navigation("/");
            }
        })
    }
    const editClick = () => {
        setModalActive(true);
    }
    return (
        <div
            className={type === "declined" ? styles.reviewBlockRejected : type === "approved" ? styles.reviewBlockPublished : styles.reviewBlock}>
            {isLoading ? <Loader/> : <div>
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
                {type === "declined" ?
                    <div className={styles.rejected}>
                        <RejectedLogo/>
                        <p className={styles.rejectedText}>Отзыв отклонен</p>
                    </div> : type === "approved" ?
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
            </div>}
            <ModalEditReview comment={comment} id={id} active={modalActive} setActive={setModalActive}/>
        </div>
    )
}
export default ReviewBlock;