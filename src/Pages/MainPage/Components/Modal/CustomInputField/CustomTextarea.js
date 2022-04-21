import React, {useState} from "react";
import errorImage from "./errorImage.svg";
import './style.css'
import '../Modal.css'
import {$reviewInputComment, $reviews, changeInputComment} from "../../../../../State/reviewsStore";
import {useStore} from "effector-react";
import {fieldRequired, maxLength200} from "../../../../../State/validators/authInputsValidators";

const CustomTextarea = (props) => {
    const textareaValue = useStore($reviewInputComment);
    if (props.type !== "editReview") {

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

    } else {
        let errors = [];
        if (fieldRequired(props.value) != true) {
            errors.push(fieldRequired(props.value))
        } else if (maxLength200(props.value) != true) {
            errors.push(maxLength200(props.value));
        }
        return (
            <div>
 <textarea {...props} value={props.value}
           className={errors.length > 0 ? "error" : ""} onChange={(event) => {
     props.setValue(event.target.value)
 }}>
            </textarea>
                <p className={props.value.length > 200 ? "symbolsError2" : "countSymbols2"}>{props.value.length + "/200"}</p>
                {errors.length > 0 ?
                    <div className="errorBlock">
                        <img src={errorImage} width={7} height={7}/>
                        <span>{errors[0]}</span>
                    </div> : null}
            </div>
        )
    }

}
export default CustomTextarea;