import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'

import './SideNavigationItem.css'

const SideNavigationItem = ({ link, src, title }) => {
    return (
        <Link to={link}>
            <div className="SideNavigationItem">
                <ReactSVG beforeInjection={(svg) => svg.classList.add('SideNavigationItem__logo')} src={src} />
                <span className="SideNavigationItem__title">{title}</span>
            </div>
        </Link>
    )
};

SideNavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default SideNavigationItem;