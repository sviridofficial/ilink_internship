import React from "react";
import ControlPanelHeader from "../../Components/ControlPanelHeader/ControlPanelHeader";
import {Route} from "react-router-dom";
import PanelNavbar from "../../Components/PanelNavbar/PanelNavbar";

const Members: React.FC = () => {
    return (
        <div>
            <ControlPanelHeader/>
            <PanelNavbar/>
            <h1>Участники</h1>
        </div>
    )
}
export default Members;
