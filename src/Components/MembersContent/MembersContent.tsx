import React from "react";
import styles from "./MembersContent.module.css";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";
import {useStore} from "effector-react";
import {$students} from "../../State/studentsScore";
import Dropdown from "../Dropdown/Dropdown";
import Table from "../Table/Table";
import SliderButtons from "../SliderButtins/SliderButtons";

const MembersContent: React.FC = () => {
    const membersList = useStore($students);
    if (membersList.length == 0) {
        return (
            <div className={styles.membersContent}>
                <div className={"emptyMembers"}>
                    <EmptyMembers className={styles.emptyMembersLogo}/>
                </div>
            </div>)
    } else {
        return (
            <div>
                <div className={styles.membersBlock}>
                    <h1 className={styles.membersHeaderText}>Участники</h1>
                    <div className={styles.dropdownBlock}>
                        <Dropdown/>
                        <SliderButtons/>
                    </div>
                </div>
                <Table itemsPerPage={6}/>
            </div>
        )
    }
}
export default MembersContent;