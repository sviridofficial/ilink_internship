import React from "react";
import Authorization from "./Pages/Authorization/Authorization";
import {Route, Routes} from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import MainPage from "./Pages/MainPage/MainPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Authorization/>}/>
            <Route path={"/reset"} element={<ResetPassword/>}/>
            <Route path={"/main"} element={<MainPage/>}/>
        </Routes>
    );
}

export default App;
