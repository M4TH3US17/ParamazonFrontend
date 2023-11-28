import React, { useEffect, useState } from 'react';
import './menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

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
                        <ul className='menu-mobile'>
                            <li className='menu-item-mobile'><i className="bi bi-house-door-fill"></i></li>
                            <li className='menu-item-mobile'><i className="bi bi-star-fill"></i></li>
                            <li className='menu-item-mobile'><i className="bi bi-telephone-fill"></i></li>
                            <li className='menu-item-mobile'><i className="bi bi-list"></i></li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Menu;
