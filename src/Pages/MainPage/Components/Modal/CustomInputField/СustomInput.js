import React from "react";
import '../Modal.css';
import errorImage from "./errorImage.svg";
import {useStore} from "effector-react";
import {$reviewInputName, changeInputName} from "../../../../../State/reviewsStore";


const CustomInput = (props) => {
    const inputState = useStore($reviewInputName)

    return (

        <div>
            <input {...props} onChange={event => changeInputName(event.target.value)}
                   value={inputState.name}
                   className={"nameInput" + " " + (inputState.validatorErrors.length > 0 ? " error" : "")}/>
            {inputState.validatorErrors.length > 0 ?
                <div className="errorBlock">
                    <img src={errorImage} width={7} height={7}/>
                    <span>{inputState.validatorErrors[0]}</span>
                </div> : null}
        </div>

    )
}
export default CustomInput;