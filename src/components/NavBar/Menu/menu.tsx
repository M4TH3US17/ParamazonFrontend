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
                        <li className='menu-item'>Redes Sociais</li>
                    </ul>
                ) : (
                    <div>
                       {isOpen ? (<i className="bi bi-x-lg" onClick={() => setIsOpen(false)}></i>) : (<i className="bi bi-list" onClick={() => setIsOpen(true)}></i>)}

                        <ul className='menu-mobile' style={{display: isOpen ? 'block' : 'none'}}>
                            <li className='menu-item-mobile'>Home</li>
                            <li className='menu-item-mobile'>Shows</li>
                            <li className='menu-item-mobile'>Redes Sociais</li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Menu;
