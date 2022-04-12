import React from "react";
import Authorization from "./Pages/Authorization/Authorization";
import {Route, Routes} from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Authorization/>}/>
            <Route path={"/reset"} element={<ResetPassword/>}/>
        </Routes>
    );
}

export default App;
