import React, {useState} from "react";
import styles from "./ReviewContent.module.css";
import Dropdown from "../Dropdown/Dropdown";
import ReviewBlock from "../ReviewBlock/ReviewBlock";

const ReviewContent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("unpublished");
    return (
        <div className={styles.contentBlock}>
            <div className={styles.contentHeader}>
                <h1 className={styles.reviewHeaderText}>Отзывы</h1>
                <Dropdown type={"Reviews"} selected={selectedOption} setSelect={setSelectedOption}/>
            </div>
            <div className={styles.reviews}>
                <ReviewBlock/>
                <ReviewBlock/>
                <ReviewBlock/>
                <ReviewBlock/>
            </div>
        </div>
    )
}
export default ReviewContent;