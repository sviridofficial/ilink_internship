import React from "react";
import styles from "../UserNotExist/UserNotExist.module.css";

interface IErrorEditBlock {
    errorMessage: string,
    isActive: boolean
}

const ErrorEditBlock: React.FC<IErrorEditBlock> = ({errorMessage, isActive}) => {
    return (
        <div className={isActive?styles.errorBlock: styles.none}>
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorEditBlock;