import React from 'react';

import './SideNavigation.css'
import SideNavigationItem from './SideNavigationItem/SideNavigationItem';

const SideNavigation = () => {
    return (
        <div className="SideNavigation">
            <div className="SideNavigation__logo">
                <img src="images/logo2.png" alt="logo" />
            </div>

            <div className="SideNavigation__menu SideNavigation__menu_margin">
                <SideNavigationItem link="/" src="images/group.svg" title="Тренировки" />
                <SideNavigationItem link="/meterage" src="images/tape-measure.svg" title="Замеры тела" />
                <SideNavigationItem link="/diet" src="images/apple.svg" title="Питание" />
                <SideNavigationItem link="/directory" src="images/directory.svg" title="Справочник" />
            </div>
        </div>
    )
}

export default SideNavigation;