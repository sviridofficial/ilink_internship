import React from "react";
import errorImage from "./errorImage.svg";
import {maxLength20, requiredField} from "../../../FormValidation/validators";
import './style.css'

const CustomTextarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}
                      className={(meta.touched && meta.error ? "error" : "")}>
            </textarea>
            <p className={input.value.length>200? "symbolsError":"countSymbols"}>{input.value.length + "/200"}</p>
            {meta.touched && meta.error &&
            <div className="errorBlock">
                <img src={errorImage} width={7} height={7}/>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
}
export default CustomTextarea;