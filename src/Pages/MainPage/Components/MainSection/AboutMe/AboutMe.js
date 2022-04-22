import React from "react";
import './AboutMe.css';
import sex from './sex.svg';
import pet from './petLogo.svg';
import {useStore} from "effector-react";
import {$userStore} from "../../../../../State/userStore";

const AboutMe = () => {
    const userData = useStore($userStore);
    return (
        <div className='aboutMe'>
            <div className='photo'></div>
            <div className='information'>
                <div className='informationTop'>
                    <div className='myFullName'>
                        <div className={"userDataBlock"}>
                            <p className={"firsname"}>{userData.username}</p>
                            <p className={"lastname"}>&nbsp;{userData.lastname}</p>
                        </div>
                    </div>
                    <div className='birthday'>
                        <p>{userData.date}</p>
                    </div>
                </div>
                <div className='informationMiddle'>
                    <p className='city'><strong>Город:</strong>&nbsp;{userData.city}</p>
                    <div className='sexBlock'>
                        <p className='sex'><strong>Пол: </strong>&nbsp;{userData.sex}</p>
                        <img src={sex} className='sexImage'/>
                    </div>
                    <p className='age'><strong>Возраст: </strong>20</p>
                </div>
                <div className='informationBottom'>
                    <p className='aboutMeText'><strong>О себе: </strong> {userData.aboutMe}</p>
                </div>
                <div className='homePet'>
                    <img className='petLogo' src={pet} width='32' height='21'/>
                    <p className='petText'><strong>Домашнее животное: </strong>{userData.pet}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;