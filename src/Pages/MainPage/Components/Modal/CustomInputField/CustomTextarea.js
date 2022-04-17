import React from "react";
import errorImage from "./errorImage.svg";
import './style.css'
import '../Modal.css'
import {createStore} from "effector";
import {$reviewInputComment, changeInputComment} from "../../../../../State/reviewsStore";
import {useStore} from "effector-react";

const CustomTextarea = (props) => {
    const textareaValue = useStore($reviewInputComment);
    return (
        <div>
            <textarea {...props} value={textareaValue.comment}
                      className={textareaValue.validatorErrors.length > 0 ? "error" : ""} onChange={(event) => {
                changeInputComment(event.target.value)
            }}>
            </textarea>
            <p className={textareaValue.comment.length > 200 ? "symbolsError" : "countSymbols"}>{textareaValue.comment.length + "/200"}</p>
            {textareaValue.validatorErrors.length > 0 ?
                <div className="errorBlock">
                    <img src={errorImage} width={7} height={7}/>
                    <span>{textareaValue.validatorErrors[0]}</span>
                </div> : null}
        </div>
    )
}
export default CustomTextarea;