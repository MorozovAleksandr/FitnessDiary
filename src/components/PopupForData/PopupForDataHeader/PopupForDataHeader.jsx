import React from 'react';
import PropTypes from 'prop-types';
import './PopupForDataHeader.css'

const PopupForDataHeader = ({ onClose }) => {
    return (
        <header className="PopupForDataHeader">
            <img src="images/logo.png" alt="logo" className="" />
            <img onClick={onClose} src="images/close.png" alt="exit" className="PopupForDataHeader__close" />
        </header>
    );
};

PopupForDataHeader.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default PopupForDataHeader;