import React, {useState} from "react";
import styles from "./MembersContent.module.css";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";
import {useStore} from "effector-react";
import Dropdown from "../Dropdown/Dropdown";
import Table from "../Table/Table";
import SliderButtons from "../SliderButtins/SliderButtons";
import {$students} from "../../State/membersStore";

const MembersContent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("all");
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
            <div className={styles.contentBlock}>
                <div className={styles.membersBlock}>
                    <h1 className={styles.membersHeaderText}>Участники</h1>
                    <div className={styles.dropdownBlock}>
                        <Dropdown type={"Students"} selected={selectedOption} setSelect={setSelectedOption}/>
                        <SliderButtons/>
                    </div>
                </div>
                <Table itemsPerPage={6} selectedOption={selectedOption}/>
            </div>
        )
    }
}
export default MembersContent;