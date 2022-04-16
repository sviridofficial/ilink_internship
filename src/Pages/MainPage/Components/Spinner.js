import React from "react";
import spinner from './spinner.svg';
import './Spinner.css';

const Spinner = () => {

    return (
        <div className="spinner">
            <img className="spinnerPhoto" src={spinner}/>
        </div>
    )
}
export default Spinner;