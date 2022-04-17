import React, {Component, useRef, useState} from "react";
import './Reviews.css';
import Slider from "react-slick";
import left from './left.svg';
import right from './right.svg';
import plus from './plus.svg';
import Modal from "../../Modal/Modal";
import {useStore} from "effector-react";
import {$reviews} from "../../../../../State/reviewsStore";


const Reviews = (props) => {
    let slider = React.createRef();
    let comments = useStore($reviews);
    const [modalActive, setModalActive] = useState(false);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    let allComments = comments.map(c => <div>
        <div className='reviwContainer'>
            <div className='containerHeader'>
                <div className="x">
                    <div className='userPhoto'/>
                    <p className='userName'>{c.username}</p>
                </div>
                <p className='postAdded'>{c.date}</p>
            </div>
            <div className="comment">
                <p>{c.comment}</p>
            </div>
        </div>
    </div>);

    return (
        <div className='reviewBlock'>
            <div className='reviews'>
                <div className='reviewsHeader'>
                    <p className='name'>Отзывы</p>
                    <button className="button" onClick={() => {
                        setModalActive(true)
                    }}>Добавить отзыв
                    </button>
                    <button className="button2" onClick={() => {
                        setModalActive(true)
                    }}>
                        <img src={plus} width={14} height={14}/>
                    </button>
                </div>
                <div className='reviewConteiner'>
                    <Slider {...settings} ref={slider}>
                        {allComments}
                    </Slider>
                </div>
            </div>
            <button className="leftButton">
                <img src={left} onClick={() => {
                    slider.current.slickPrev();
                }}/>
            </button>
            <button className="rightButton">
                <img src={right} onClick={() => {
                    slider.current.slickNext();
                }}/>
            </button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Reviews
