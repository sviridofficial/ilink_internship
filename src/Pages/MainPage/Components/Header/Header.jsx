import React from "react";
import './Header.css';
import logo from './headerPhoto.png';
import vector from './Vector.svg'
import academy from './ACADEMY.svg';
import {Link} from "react-router-dom";
import {$userStore} from "../../../../State/userStore";
import {useStore} from "effector-react";

const Header = (props) => {
    const userData = useStore($userStore);
    return (
        <div className="header">
            <div className="headerInfo">
                <img className="headerPhoto" src={userData.imagePath} width='52' height='52'/>
                <p className='myName'>{userData.username + " " + userData.lastname}</p>
            </div>

            <div className='companyLogo'>
                <img src={vector} className='ilink' width='85.43' height='32.19'/>
                <img src={academy} className='academy' width='85.43' height='12.38'/>

            </div>
            <Link to={"/members"}>
                <button className='headerButton'>Панель управления</button>
            </Link>
            <Link to={"/members"} className={"hiddenButton"}>
                <button className='headerButton2'>
                    <div className='circle'></div>
                    <div className='oval'></div>
                </button>
            </Link>
        </div>
    )
}
export default Header;