import React from "react";
import styles from "./MembersContent.module.css";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";

const MembersContent: React.FC = () => {
    return (
        <div className={styles.membersContent}>
            <div className={"emptyMembers"}>
                <EmptyMembers className={styles.emptyMembersLogo}/>
            </div>
        </div>)
}
export default MembersContent;