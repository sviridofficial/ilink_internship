import React from "react";
import WelcomeToAcademy from "./AboutMe/WelcomeToAcademy";
import AboutMe from "./AboutMe/AboutMe";
import Reviews from "./ Reviews/ Reviews";

const MainSection = () => {
    return (
        <div className='section'>
            <WelcomeToAcademy/>
            <AboutMe/>
            <Reviews/>
        </div>
    )
}

export default MainSection;