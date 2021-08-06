import React from 'react';
import './PageTitle.css'

const PageTitle = (props) => {
    return (
        <div className="PageTitle__title">{props.title}</div>
    )
}

export default PageTitle;