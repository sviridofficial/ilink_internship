import React from "react";
import errorImage from "./errorImage.svg";
import './style.css'

const CustomTextarea = (props) => {
    return (
        <div>
            <textarea {...props}
                      className={"error"}>
            </textarea>
            <p className={"countSymbols"}>30/200</p>
        </div>
    )
}
export default CustomTextarea;