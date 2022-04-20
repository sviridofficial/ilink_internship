import React, {useEffect, useRef, useState} from "react";
import "./Table.css";
import Status from "../Status/Status";
import {useStore} from "effector-react";
import {$membersStore, listMembers, membersStore} from "../../State/membersStore";
import ReactPaginate from "react-paginate";


interface ITable {
    itemsPerPage: number
}

interface Props {
    currentItems: membersStore[];
}


// @ts-ignore
const Items: React.FC<Props> = ({currentItems}) => {
    return (
        currentItems.map((element) => (
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>{element.studentName}</p>
                    </div>
                </td>
                <td>{element.studentDescription}</td>
                <td><Status value={element.studentStatus}/></td>
            </tr>
        ))
    )
}

const Table: React.FC<ITable> = ({itemsPerPage}) => {
    const allStudents = useStore($membersStore);

    const [currentItems, setCurrentItems] = useState(allStudents);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(allStudents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allStudents.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % allStudents.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (<div>
        <div className={"tableBlock"}>
            <table id="customers">
                <tr>
                    <th className={"firstTh"}>ИФ УЧЕНИКА</th>
                    <th>КРАТКАЯ ИНФОРМАЦИЯ</th>
                    <th className={"lastTh"}>СТАТУС</th>
                </tr>
                <Items currentItems={currentItems}/>
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