import React from 'react';
import PropTypes from 'prop-types';
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

ButtonAdd.propTypes = {
    text: PropTypes.string.isRequired
}

export default ButtonAdd;