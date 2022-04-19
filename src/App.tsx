import React from "react";
import Authorization from "./Pages/Authorization/Authorization";
import {Route, Routes} from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import MainPage from "./Pages/MainPage/MainPage";
import Members from "./Pages/Members/Members";
import Reviews from "./Pages/Reviews/Reviews";
import AboutMe from "./Pages/AboutMe/AboutMe";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Authorization/>}/>
            <Route path={"/reset"} element={<ResetPassword/>}/>
            <Route path={"/main"} element={<MainPage/>}/>
            <Route path={"/members"} element={<Members/>}/>
            <Route path={"/reviews"} element={<Reviews/>}/>
            <Route path={"/aboutme"} element={<AboutMe/>}/>
        </Routes>
    );
}

export default App;
