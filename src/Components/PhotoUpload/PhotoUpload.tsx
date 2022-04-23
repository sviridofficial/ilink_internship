import React from "react";
import styles from "./PhotoUpload.module.css";
import plus from "../../Pages/MainPage/Components/Modal/FileInputCustom/plus.svg";
import {ReactComponent as Pencil} from "../../Assets/pencil.svg";

const PhotoUpload: React.FC = () => {
    return (
        <input type='file' className={styles.addPhoto} hidden={true}/>
    )
}
export default PhotoUpload;