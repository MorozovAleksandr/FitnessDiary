import React from 'react';
import './ContentContainer.css'
import Search from '../Search/Search';
import Content from '../Content/Content';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

const ContentContainer = () => {
    return (
        <div className="ContentContainer">
            <div className="ContentContainer__top">
                <Search />
                <ButtonAdd text="Новая Тренировка" />
            </div>
            <Content />
        </div>
    );
};

export default ContentContainer;