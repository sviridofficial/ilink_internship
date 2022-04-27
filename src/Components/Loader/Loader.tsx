import React from "react";
import styles from "./Loader.module.css";
import loader from "../../Assets/loader.gif"

const Loader: React.FC = () => {
    return (
        <div className={styles.loaderblock}>
            <img className={styles.loader} src={loader}/>
        </div>
    )
}

export default Loader;