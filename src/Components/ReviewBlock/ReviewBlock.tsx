import React from "react";
import styles from "./ReviewBlock.module.css";
import {ReactComponent as Edit} from "../../Assets/Edit.svg";

const ReviewBlock: React.FC = () => {
    return (
        <div className={styles.reviewBlock}>
            <div className={styles.reviewHeader}>
                <div className={styles.reviewHeaderUserInformation}>
                    <div className={styles.photo}/>
                    <p className={styles.userName}>Буба Бубенцов</p>
                </div>
                <p className={styles.date}>08.01.2022</p>
            </div>
            <p className={styles.comment}>Отличный коллектив, руководители понимают сам процесс работы каждого
                сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому
                принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка
                ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают
                всегда вовремя.</p>
            <div className={styles.buttons}>
                <div className={styles.leftButtons}>
                    <button className={styles.submit}>Опубликовать</button>
                    <button className={styles.refuse}>Отклонить</button>
                </div>
                <button className={styles.edit}><Edit/></button>
            </div>
        </div>
    )
}
export default ReviewBlock;