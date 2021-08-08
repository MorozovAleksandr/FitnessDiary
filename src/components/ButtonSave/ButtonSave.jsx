import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSave.css';

const ButtonSave = ({ text, event }) => {
    return (
        <button onClick={event} className="ButtonSave">
            <span>
                {text}
            </span>
        </button>
    )
}

ButtonSave.propTypes = {
    text: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired
}

export default ButtonSave;