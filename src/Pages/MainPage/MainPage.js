import React, {useEffect} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./MainPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSection from "./Components/MainSection/MainSection";

function MainPage(props) {
    return (
        <div>
            <Header/>
            <MainSection/>
            <Footer/>
        </div>
    );
}

export default MainPage;
