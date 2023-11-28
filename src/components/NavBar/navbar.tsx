import React from 'react';
import './navbar.css';
import Menu from './Menu/menu';

const NavBar = () => {
    return (
    <header className='app-navbar'>
        <div className='app-navbar-container'>
            <div className='app-navbar-logo'/>

            <Menu/>
        </div>
    </header>
    );
};

export default NavBar;