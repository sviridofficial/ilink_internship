import React from "react";
import plus from "./FileInputCustom/plus.svg";

const PhotoUpload = () => {
    return (
        <input type='file' className="addPhoto" hidden="hidden">
            <img className="plus" src={plus} width={14.3} height={14.3}/>
            <p>Загрузить фото</p>
        </input>
    )
}

export default PhotoUpload;