import React from 'react';
import './EmptyPage.css'

const EmptyPage = (props) => {
    return (
        <div className="EmptyPage__notice">
            <div className="EmptyPage__notice__img"></div>
            <div className="EmptyPage__notice__text">{props.text}</div>
            <button className="EmptyPage__notice__button">Начать</button>
        </div>
    )
}

export default EmptyPage;