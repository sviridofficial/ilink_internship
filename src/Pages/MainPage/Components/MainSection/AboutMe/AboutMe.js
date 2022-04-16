import React from "react";
import './AboutMe.css';
import sex from './sex.svg';
import pet from './petLogo.svg';

const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <div className='photo'></div>
            <div className='information'>
                <div className='informationTop'>
                    <div className='myFullName'>
                        <p>Константин Свиридов</p>
                    </div>
                    <div className='birthday'>
                        <p>15.06.2001</p>
                    </div>
                </div>
                <div className='informationMiddle'>
                    <p className='city'><strong>Город:</strong> Томск</p>
                    <div className='sexBlock'>
                        <p className='sex'><strong>Пол: </strong> мужчина</p>
                        <img src={sex} className='sexImage'/>
                    </div>
                    <p className='age'><strong>Возраст: </strong>20</p>
                </div>
                <div className='informationBottom'>
                    <p className='aboutMeText'><strong>О себе: </strong> Всем привет! Меня зовут Константин, мне 20 лет,
                        я
                        студент Томского Политехнического Университета. Учусь на направлении "Программная инженерия", в свободное от учёбы
                        время создаю веб-приложения. Недавно я создал сайт для Томской компании.</p>
                </div>
                <div className='homePet'>
                    <img className='petLogo' src={pet} width='32' height='21'/>
                    <p className='petText'><strong>Домашнее животное: </strong>нет</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;