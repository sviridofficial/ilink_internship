import React, {useEffect, useState} from "react";
import styles from "./ReviewContent.module.css";
import Dropdown from "../Dropdown/Dropdown";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import {useStore} from "effector-react";
import {$reviews, dropDownFiltered, setAllReviews} from "../../State/reviewsStore";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";
import {getAllReviews} from "../../State/api";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader/Loader";

const ReviewContent: React.FC = () => {
    let reviews = useStore($reviews);
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState("onCheck");

    useEffect(() => {
        const request = async () => {
            const result = await getAllReviews();

            if (result.statusCode != 401) {
                setAllReviews(result);
                setIsLoading(false);
            } else {
                navigation("/");
            }
        }
        request()
    }, [])
    if (isLoading) {
        return (
            <div className={styles.contentBlock}>
                <div className={styles.contentHeader}>
                    <h1 className={styles.reviewHeaderText}>Отзывы</h1>
                    <Dropdown type={"Reviews"} selected={selectedOption} setSelect={setSelectedOption}/>
                </div>
                <Loader/>
            </div>
        )
    } else if (reviews.length === 0) {
        return (
            <div className={styles.membersContent}>
                <div className={"emptyMembers"}>
                    <EmptyMembers className={styles.emptyMembersLogo}/>
                </div>
            </div>
        )
    } else {


        reviews = dropDownFiltered(selectedOption, reviews);
        const allReviews = reviews.map(element => <ReviewBlock id={element.id} username={element.authorName}
                                                               createdAt={element.createdAt != undefined ? element.createdAt : ""}
                                                               comment={element.text} type={element.status}
                                                               authorImage={element.authorImage}/>)
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