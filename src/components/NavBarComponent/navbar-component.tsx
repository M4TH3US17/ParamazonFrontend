import React from 'react';
import './navbar-component.css';
import Menu from './Menu/menu';

const NavBarComponent = () => {
    return (
    <header className='app-navbar'>
        <div className='app-navbar-container'>
            <div className='app-navbar-logo'/>

            <Menu/>
        </div>
    </header>
    );
};

export default NavBarComponent;