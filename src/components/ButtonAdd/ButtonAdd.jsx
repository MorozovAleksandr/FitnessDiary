import React from 'react';
import './ButtonAdd.css';

const ButtonAdd = ({ text }) => {
    return (
        <button className="ButtonAdd">
            <span className="ButtonAdd__icon">
                &#43;
            </span>
            <span>
                {text}
            </span>
        </button>
    )
}

export default ButtonAdd;