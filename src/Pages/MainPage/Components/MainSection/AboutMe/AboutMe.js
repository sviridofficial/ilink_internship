import React, {useEffect, useState} from "react";
import './AboutMe.css';
import sex from './sex.svg';
import pet from './petLogo.svg';
import {useStore} from "effector-react";
import {$userStore, changeUserInformation, getUserInfoFX, getYearsOld} from "../../../../../State/userStore";
import Loader from "../../../../../Components/Loader/Loader";
import {useNavigate} from "react-router-dom";

const AboutMe = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [age, setAge] = useState(0);
    const userData = useStore($userStore);
    const auth = useNavigate();
    useEffect(() => {
        const request = async () => {
            const result = await getUserInfoFX();
            setIsLoading(false);
            if (result.statusCode === 401) {
                auth("/");
            } else {
                const birthday = new Date(result.birthDate);
                setAge(getYearsOld(birthday));
                changeUserInformation({
                    username: result.firstName,
                    lastname: result.lastName,
                    date: birthday.getDate() + "." + (birthday.getMonth() + 1) + "." + birthday.getFullYear(),
                    aboutMe: result.aboutMe,
                    pet: result.hasPet ? "есть" : "нет",
                    sex: result.gender === "male" ? "мужчина" : "женщина",
                    city: result.cityOfResidence,
                    shortInformation: ""
                })
            }
        }
        request();

    }, [])
    if (isLoading) {
        return (
            <div className='aboutMe'>
                <Loader/>
            </div>
        )
    } else {
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
                        <p className='age'><strong>Возраст: </strong>{age}</p>
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
}
export default AboutMe;