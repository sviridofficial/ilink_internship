import React from "react";
import styles from "./FormInput.module.css";
import {ReactComponent as Show} from "../../../Assets/Show.svg";
import {ReactComponent as Hide} from "../../../Assets/Hide.svg";
import {ReactComponent as Info} from "../../../Assets/Info.svg";
import {changeSecurityPassword} from "../../../State/authStore";


export interface FormInputProps {
    inputLabel: string
    placeholder: string,
    type: string,
    value: string,
    showEye: boolean,
    errors: string[]

    changeState(event: string): void
}

const FormInput: React.FC<FormInputProps> = ({inputLabel, placeholder, type, value, changeState, showEye, errors}) => {

    return (
        <div className={styles.formInput}>
            <p className={styles.inputHeader}>{inputLabel}</p>
            <input value={value} type={type} className={errors.length != 0 ? styles.inputError : styles.input}
                   placeholder={placeholder}
                   onChange={(e) => changeState(e.target.value)}/>
            <div className={styles.notification}>

                <div className={type === "password" && showEye ? styles.show : styles.close} onClick={() => {
                    changeSecurityPassword()
                }}><Show className={styles.showImage}/></div>
                <div className={type === "text" && showEye ? styles.hide : styles.close} onClick={() => {
                    changeSecurityPassword()
                }}><Hide/></div>
                <div className={errors.length != 0 ? styles.info : styles.close}><Info className={styles.infoImage}/></div>
                <div className={styles.errorsModal}>
                    {errors.map(e => <h1>{e}</h1>)}
                </div>
            </div>

        </div>
    )
}

export default FormInput;