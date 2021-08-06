import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__left">Все права защищены. 2021</div>
            <div className="Footer__right">
                <img className="Footer__right__icon" src="images/Instagram.png" alt="instagram" />
                <img className="Footer__right__icon Footer__right__icon_margin" src="images/Telegram.png" alt="telegran" />
                <img className="Footer__right__icon" src="images/Facebook.png" alt="facebook" />
            </div>
        </div>
    )
}

export default Footer;