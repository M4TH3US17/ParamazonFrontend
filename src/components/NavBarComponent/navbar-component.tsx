import React, { useEffect, useState } from 'react';
import './navbar-component.css';
import Menu from './Menu/menu';

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

    return (
    <header className='app-navbar'>

        <div className='app-navbar-content'>
            <div className='app-navbar-logo'/>

            <Menu/>
        </div>
    </header>
    );
};

export default NavBarComponent;