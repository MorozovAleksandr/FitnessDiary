import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__date">01.01.2021</div>
            <div className="Header__logo">
                <img src="images/logo.png" alt="logo" />
            </div>
            <div className="Header__profile">
                <span>Анна</span>
                <img src="images/profile.png" alt="profile" />
            </div>
        </header>
    )
}

export default Header;