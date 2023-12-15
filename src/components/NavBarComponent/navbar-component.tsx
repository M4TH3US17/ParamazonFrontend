import React, { useEffect, useState } from 'react';
import './navbar-component.css';
import Menu from './Menu/menu';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import { Link } from 'react-router-dom';
import eventBus from '../../utils/Events/EventBus';


const NavBarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHamburguerDesktop = () => {
        setIsOpen(!isOpen);
        eventBus.emit('toggleMenuHamburguerDesktop', !isOpen);
    }

    let NavBarMobile = (
        <header className='app-navbar'>
            <div className='app-navbar-content'>
                <div className='app-navbar-logo' />
                <Menu/>
            </div>
        </header>);

    let NavBarDesktop = (
        <header className='app-navbar'>
            <div className='app-navbar-content'>

                <div className='app-navbar-content-item'>
                    <div className='app-navbar-content-list-container'>
                        <i className="bi bi-list" onClick={toggleMenuHamburguerDesktop}></i>
                    </div>
                    
                    <div className='app-navbar-content-logo-container'>
                        <div className='app-navbar-logo' style={{display: WIDTH_SCREEN < 1280 ? 'none' : 'block'}}/>
                        <h2 className='app-navbar-logo-title'>Paramazon</h2>
                    </div>
                </div>

                {(WIDTH_SCREEN >= 1280) ? (<div className='app-navbar-content-item'><Menu/></div>) : (<></>)}

                <div className='app-navbar-content-item'>
                    <div className='app-navbar-content-links-container'>
                        <a href='https://www.facebook.com/botecoparamazon' target='_blank'><i className="bi bi-facebook app-navbar-content-links-item"></i></a>
                        <a href='https://www.instagram.com/boteco_paramazon/' target='_blank'><i className="bi bi-instagram app-navbar-content-links-item"></i></a>
                        <a href='#'><i className="bi bi-whatsapp app-navbar-content-links-item"></i></a>

                        <span className='app-navbar-content-links-item' style={{ fontSize: '30px' }}>l</span>
                        <Link to={'/login'} className='app-navbar-content-links-item'>LOGIN</Link>
                    </div>
                </div>

            </div>
        </header>);

    return (WIDTH_SCREEN <= 700) ? NavBarMobile : NavBarDesktop;
};

export default NavBarComponent;