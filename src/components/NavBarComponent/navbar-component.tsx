import React, { useEffect, useState } from 'react';
import './navbar-component.css';
import Menu from './Menu/menu';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import { Link } from 'react-router-dom';

/*style={(window.innerWidth >= 1000) ? { 
        position: isFixed ? 'fixed' : 'static', 
        top: isFixed ?      '0px' : '100px'} 
        : {}}
            const [isFixed, setIsFixed] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        console.log(scrollPosition);
        if (scrollPosition >= 100) setIsFixed(true);
        else setIsFixed(false);

        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);

    }, [setIsFixed, scrollPosition, setScrollPosition]);
        */
const NavBarComponent = () => {


    let NavBarMobile = (
        <header className='app-navbar'>
            <div className='app-navbar-content'>
                <div className='app-navbar-logo' />
                <Menu />
            </div>
        </header>);

    let NavBarDesktop = (
        <header className='app-navbar'>
            <div className='app-navbar-content'>

                <div className='app-navbar-content-item'>
                    <div className='app-navbar-content-logo-container'>
                        <div className='app-navbar-logo' />
                        <h2 className='app-navbar-logo-title'>Paramazon</h2>
                    </div>
                </div>

                <div className='app-navbar-content-item'>
                    <Menu />
                </div>

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