import React, {useState} from "react";
import './FlashMessage.css';
import addIcon from './addMessage.svg'

import circle from './iconS.svg';
import tick from './tick.svg';

const FlashMessage = (props) => {
    const [isOpen, setIsOpen] = useState();
    return (
        <div className={props.successSended?"flashMessage":"flashMessage notactive"}>
            <div className="flashMessageHeader">
                <p>Успешно</p>
                <img src={addIcon} onClick={props.endFlashMessage}/>
            </div>
            <div className={'flashMessageDescription'}><p>Спасибо за отзыв о нашей компании:)</p></div>
            <img className="circleMessage" src={circle} width="68px" height="75px"/>
            <img className="tick" src={tick}/>
            <div className="shape"></div>
            <div className="shapeSmall"></div>
        </div>
    )
}
export default FlashMessage;