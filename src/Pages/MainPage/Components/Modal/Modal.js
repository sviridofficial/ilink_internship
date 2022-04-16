import React, {useState} from "react";
import './Modal.css';
import cancel from './cancel.svg';



const Modal = (props) => {


    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => {
            props.setActive(false)
        }}>
            <div className={props.active ? "modal_content active" : "modal_content"}
                 onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <p className="modal_reviews">Отзыв</p>
                    <img className='cancelImage' src={cancel} onClick={() => props.setActive(false)}/>
                </div>
                <p className="whatIsYourName">Как вас зовут?</p>
            </div>
        </div>
    )

}


export default Modal;