import React, {useRef} from "react";
import "./Table.css";
import Status from "../Status/Status";


const Table = () => {
    return <div  className={"tableBlock"}>
        <table id="customers">
            <tr>
                <th className={"firstTh"}>ИФ УЧЕНИКА</th>
                <th>КРАТКАЯ ИНФОРМАЦИЯ</th>
                <th className={"lastTh"}>СТАТУС</th>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Зачислен"}/></td>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Отчислен"}/></td>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Отчислен"}/></td>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Отчислен"}/></td>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Отчислен"}/></td>
            </tr>
            <tr>
                <td>
                    <div className={"userBlock"}>
                        <div className={"tableUserPhoto"}></div>
                        <p className={"userNameTable"}>Свиридов Константин</p>
                    </div>
                </td>
                <td>Хороший сайтец бро! Мне очень нравится! Длинный текст проверяю</td>
                <td><Status value={"Обучается"}/></td>
            </tr>
        </table>
    </div>
}

export default Table;