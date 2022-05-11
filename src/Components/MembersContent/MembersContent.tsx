import React, {useEffect, useState} from "react";
import styles from "./MembersContent.module.css";
import {ReactComponent as EmptyMembers} from "../../Assets/emptyMembers.svg";
import {useStore} from "effector-react";
import Dropdown from "../Dropdown/Dropdown";
import Table from "../Table/Table";
import SliderButtons from "../SliderButtins/SliderButtons";
import {$students, membersStore, setMembers} from "../../State/membersStore";
import {getAllUsers} from "../../State/api";
import Loader from "../Loader/Loader";
import {useNavigate} from "react-router-dom";

const MembersContent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const membersList = useStore($students);
    const link = useNavigate();

    useEffect(() => {

        const getUsers = async () => {
            const members: membersStore[] = [];
            const response = await getAllUsers().then(response => {
                if (response.ok) {

                    response.json().then(data => {
                        for (let i = 0; i < data.length; i++) {
                            const fullName = data[i].lastName + " " + data[i].firstName;
                            const smallInfo = data[i].smallAboutMe;
                            const imagePath = `https://academtest.ilink.dev/images/${data[i].profileImage}`
                            const status = data[i].academyStatus
                            members.push({
                                studentName: fullName,
                                smallAboutMe: smallInfo,
                                studentStatus: status,
                                profileImage: imagePath
                            })
                        }
                        setMembers(members);
                        setIsLoading(false);
                    });
                } else {
                    setMembers([]);
                    link("/");
                }
            })
        }
        getUsers();
    }, [])

    if (isLoading) {
        return (
            <div className={styles.contentBlock}>
                <div className={styles.membersBlock}>
                    <h1 className={styles.membersHeaderText}>Участники</h1>
                    <div className={styles.dropdownBlock}>
                        <Dropdown type={"Students"} selected={selectedOption} setSelect={setSelectedOption}/>
                        <SliderButtons/>
                    </div>
                </div>
                <Loader/>
            </div>
        )
    } else if (membersList.length == 0) {
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