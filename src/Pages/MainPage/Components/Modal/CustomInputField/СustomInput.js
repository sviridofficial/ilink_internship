import React from "react";
import '../Modal.css';


const CustomInput = (props) => {
    return (

        <div>
            <input {...props}
                   className={"nameInput"}/>
        </div>
    )
}
export default CustomInput;