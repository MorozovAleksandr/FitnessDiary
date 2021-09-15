import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSave.css';

const ButtonSave = ({ text, event, width }) => {
    return (
        <button style={{ width: width }} onClick={event} className="ButtonSave">
            <span>
                {text}
            </span>
        </button>
    )
}

ButtonSave.propTypes = {
    text: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
}

export default ButtonSave;