import React from "react";
import styles from "./UserNotExist.module.css"
import {useStore} from "effector-react";
import {$messageNotFound} from "../../State/authStore";

interface IUserNotExists {
    message: string
}

const UserNotExist: React.FC<IUserNotExists> = ({message}) => {
    const notFound = useStore($messageNotFound).state
    return (
        <div className={notFound ? styles.errorBlock : styles.close}>
            <p>{message}</p>
        </div>
    )
}

export default UserNotExist;