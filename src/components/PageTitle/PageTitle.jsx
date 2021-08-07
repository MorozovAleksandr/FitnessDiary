import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css'

const PageTitle = (props) => {
    return (
        <div className="PageTitle__title">{props.title}</div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle;