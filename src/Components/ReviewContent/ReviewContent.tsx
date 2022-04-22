import React, {useState} from "react";
import styles from "./ReviewContent.module.css";
import Dropdown from "../Dropdown/Dropdown";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import {useStore} from "effector-react";
import {$reviews, dropDownFiltered} from "../../State/reviewsStore";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";

const ReviewContent: React.FC = () => {
    let reviews = useStore($reviews);
    const [selectedOption, setSelectedOption] = useState("unpublished");

    if (reviews.length === 0) {
        return (
            <div className={styles.membersContent}>
                <div className={"emptyMembers"}>
                    <EmptyMembers className={styles.emptyMembersLogo}/>
                </div>
            </div>
        )
    } else {
        // @ts-ignore
        reviews = dropDownFiltered(selectedOption, reviews);
        const allReviews = reviews.map(element => <ReviewBlock id={element.id} username={element.username}
                                                               date={element.date}
                                                               comment={element.comment} type={element.type}/>)
        return (
            <div className={styles.contentBlock}>
                <div className={styles.contentHeader}>
                    <h1 className={styles.reviewHeaderText}>Отзывы</h1>
                    <Dropdown type={"Reviews"} selected={selectedOption} setSelect={setSelectedOption}/>
                </div>
                <div className={styles.reviews}>
                    {allReviews}
                </div>
            </div>
        )
    }
}
export default ReviewContent;