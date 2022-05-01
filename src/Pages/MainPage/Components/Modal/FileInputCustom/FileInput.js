import React, {useRef, useState} from "react";
import './FileInput.css';
import plus from './plus.svg';

const FileInput = (props) => {
    const inputRef = useRef(null);
    const buttonRef = useRef();
    const onFileChange = (e) => {
        props.setSpan([e.target.files[0]]);
    }

    const buttonClick = () => {
        inputRef.current.click();
    }
    return (
        <div>
            <input type='file' id="real-file" hidden='hidden' ref={inputRef} onChange={onFileChange}/>
            <button type="button" ref={buttonRef} id="custom-button" onClick={buttonClick}>
                <img className="plus" src={plus} width={14.3} height={14.3}/>
                <p>Загрузить фото</p>
            </button>

        </div>
    )
}
export default FileInput;