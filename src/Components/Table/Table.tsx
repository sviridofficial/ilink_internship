import React, {useEffect, useRef, useState} from "react";
import "./Table.css";
import Status from "../Status/Status";
import {useStore} from "effector-react";
import {$students, filter, listMembers, membersStore} from "../../State/membersStore";
import ReactPaginate from "react-paginate";
import styles from "../ReviewBlock/ReviewBlock.module.css";
import {ReactComponent as EmptyPhoto} from "../../Assets/Camera.svg";


interface ITable {
    itemsPerPage: number,
    selectedOption: string
}

interface Props {
    currentItems: membersStore[],
    selectedOption: string
}


// @ts-ignore
const Items: React.FC<Props> = ({currentItems}) => {
    return (
        currentItems.map((element) => (
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}>
                            {element.profileImage != null ? <img className={"userPhoto"}
                                                                 src={element.profileImage}/>
                                : <div className={"photoUserNull"}><EmptyPhoto/></div>}

                        </div>
                        <p className={"userNameTable"}>{element.studentName}</p>
                    </div>
                </td>
                <td>{element.smallAboutMe}</td>
                <td><Status value={element.studentStatus}/></td>
            </tr>
        ))
    )
}

const Table: React.FC<ITable> = ({itemsPerPage, selectedOption}) => {
    const allStudents = filter(useStore($students), selectedOption);
    const [currentItems, setCurrentItems] = useState(allStudents);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(allStudents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allStudents.length / itemsPerPage));


    }, [itemOffset, itemsPerPage]);

    useEffect(() => {
        setItemOffset(0);
        const endOffset = 6;
        setCurrentItems(allStudents.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(allStudents.length / itemsPerPage));
    }, [selectedOption])


    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % allStudents.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className={"table"}>
            <div className={"tableBlock"}>
                <table id="customers">
                    <tr>
                        <th className={"firstTh"}>ИФ УЧЕНИКА</th>
                        <th>КРАТКАЯ ИНФОРМАЦИЯ</th>
                        <th className={"lastTh"}>СТАТУС</th>
                    </tr>
                    <Items currentItems={currentItems} selectedOption={selectedOption}/>
                </table>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName="paginationContainer"
                pageClassName={"pageClassName"}
                pageLinkClassName={"paginationLink"}
                activeClassName={"activePage"}
                breakClassName={"breakClassName"}
                breakLinkClassName={"breakLinkClassName"}
                previousClassName={"previousClass"}
                previousLinkClassName={"previousLink"}
                nextClassName={"previousClass"}
                nextLinkClassName={"previousLink"}
                disabledClassName={"disabled"}
            />
        </div>)
}

export default Table;