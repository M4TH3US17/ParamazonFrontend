import React, { useEffect, useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

    useEffect(() => {
        if(scrollPosition >= 100) setIsFixed(true);
        else setIsFixed(false);

        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);

    }, [setIsFixed, scrollPosition, setScrollPosition]);

    return (
        <>
            {
                ehTelaDesktop ? (
                    <ul className='menu-desktop'>
                        <li className='menu-item'>Home</li>
                        <li className='menu-item'>Shows</li>
                        <li className='menu-item'>Contato</li>
                    </ul>
                ) : (
                    <div>
                        <ul className='menu-mobile' style={{position: isFixed ? 'fixed' : 'absolute', top: isFixed ? '0px' : '100px'}}>
                            <li className='menu-item-mobile'><Link to={'/'}><i className="bi bi-house-door-fill"></i></Link></li>
                            <li className='menu-item-mobile'><Link to={'/shows'}><i className="bi bi-star-fill"></i></Link></li>
                            {/*<li className='menu-item-mobile'><Link to={'/contato'}><i className="bi bi-telephone-fill"></i></Link></li>*/}
                            <li className='menu-item-mobile'><i className="bi bi-list"></i></li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Menu;
