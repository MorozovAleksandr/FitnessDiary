import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="Search">
            <input className="Search__input" placeholder="Поиск" type="text" />
            <img className="Search__icon" src="images/loupe.svg" alt="loupe" />
        </div>
    )
}

export default Search;