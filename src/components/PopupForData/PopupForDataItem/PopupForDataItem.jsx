import React from 'react';
import PropTypes from 'prop-types';
import './PopupForDataItem.css';
import { Fragment } from 'react';

const PopupForDataItem = ({ url, text, value, setMethod }) => {
    return (
        <Fragment>
            <div className="PopupForDataItem_left">
                <img src={url} alt="icon" />
                <div className="PopupForDataItem__text">{text}</div>
            </div>
            <div className="PopupForDataItem_right">
                <input className="PopupForDataItem__label" type="text" value={value} onChange={(e) => { setMethod(e.target.value) }} />
            </div>
        </Fragment>
    );
};

PopupForDataItem.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setMethod: PropTypes.func.isRequired
}

export default PopupForDataItem;