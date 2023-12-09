import React, { useEffect, useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

    useEffect(() => {
        /*console.log(scrollPosition);*/
        if (scrollPosition >= 100) setIsFixed(true);
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
                        <ul className='menu-mobile' style={{ position: isFixed ? 'fixed' : 'absolute', top: isFixed ? '0px' : '100px' }}>
                            <li className='menu-item-mobile'><Link to={'/'}><i className="bi bi-house-door-fill"></i></Link></li>
                            <li className='menu-item-mobile'><Link to={'/shows'}><i className="bi bi-star-fill"></i></Link></li>
                            <li className='menu-item-mobile'><i className="bi bi-list" onClick={() => setIsOpen(true)}></i></li>
                        </ul>


                        <div className='navigation-bg-mobile' style={{ display: isOpen ? 'block' : 'none' }} />
                        <nav
                            className={`navigation-mobile animate__animated ${isOpen ? 'animate__slideInRight' : 'animate__slideOutRight'}`}
                            style={{ display: isOpen ? 'block' : 'none' }}>
                            <div className='navigation-mobile-item navigation-mobile-item-header'>
                                <h5 className='navigation-mobile-item-header-title'>EMPRESA</h5>
                                <i className="bi bi-x-lg" onClick={() => setIsOpen(false)}></i>
                            </div>

                            <div className='navigation-mobile-item navigation-mobile-item-links'>
                                <div className=''>
                                    <Link to={'/'} className='mb-3'>Home</Link>
                                    <Link to={'/shows'} className='mb-3'>Show Page</Link>
                                    <Link to={'/shows/selecao'}>Votação</Link>
                                </div>

                                <div className=''>
                                    <Link to={'/contato'}>Fale Conosco</Link>
                                </div>
                            </div>

                            <div className='navigation-mobile-item navigation-mobile-item-themes'>
                                <div>
                                    <a href='https://www.instagram.com/boteco_paramazon/' target='_blank' className='mb-3'>
                                        <i className="bi bi-instagram" style={{marginRight: '20px'}}></i>
                                        <span>Instagram</span>
                                    </a>

                                    <a href='https://www.facebook.com/botecoparamazon' target='_blank'>
                                        <i className="bi bi-facebook" style={{marginRight: '20px'}}></i>
                                        <span>Facebook</span>
                                    </a>
                                </div>

                                <div className=''>
                                    <a href='#'>
                                        <i className="bi bi-whatsapp" style={{marginRight: '20px'}}></i>
                                        <span>Whatsapp</span>
                                    </a>
                                </div>
                            </div>

                            <div className='navigation-mobile-item navigation-mobile-item-login'>
                                <Link to={'/login'} className='navigation-mobile-item-login-item'><i className="bi bi-box-arrow-right"></i> <span className='navigation-mobile-item-login-text'>Login</span></Link>
                            </div>
                        </nav>
                    </div>
                )
            }
        </>
    );
};

export default Menu;
