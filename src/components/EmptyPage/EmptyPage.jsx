import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import './EmptyPage.css'

const EmptyPage = ({ title, text, link }) => {
    return (
        <Fragment>
            <PageTitle title={title} />
            <div className="EmptyPage__notice">
                <div className="EmptyPage__notice__img"></div>
                <div className="EmptyPage__notice__text">{text}</div>
                <Link to={link}>
                    <button className="EmptyPage__notice__button">Начать</button>
                </Link>
            </div>
        </Fragment>
    )
}

EmptyPage.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default EmptyPage;