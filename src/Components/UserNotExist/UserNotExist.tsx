import React from "react";
import styles from "./UserNotExist.module.css"
import {useStore} from "effector-react";
import {$messageNotFound} from "../../State/authStore";

const UserNotExist: React.FC = () => {
    const notFound = useStore($messageNotFound)
    return (
        <div className={notFound ? styles.errorBlock : styles.close}>
            <p>Такого пользователя не существует</p>
        </div>
    )
}

export default UserNotExist;