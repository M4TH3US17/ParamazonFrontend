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
                        <li className='menu-desktop-item'>Home</li>
                        <li className='menu-desktop-item'>Shows</li>
                        <li className='menu-desktop-item'>Contato</li>
                    </ul>
                ) : (
                    <div>
                        <ul className='menu-mobile' style={{ position: isFixed ? 'fixed' : 'absolute', top: isFixed ? '0px' : '100px' }}>
                            <li className='menu-item-mobile'><Link to={'/'}><i className="bi bi-house-door-fill"></i></Link></li>
                            <li className='menu-item-mobile'><Link to={'/shows'}><i className="bi bi-star-fill"></i></Link></li>
                            <li className='menu-item-mobile'><i className="bi bi-list" onClick={() => setIsOpen(true)}></i></li>
                        </ul>


                        <div className='sidebar-mobile-bg-effect' style={{ display: isOpen ? 'block' : 'none' }} />

                        <nav className={`sidebar-mobile animate__animated ${isOpen ? 'animate__slideInRight' : 'animate__slideOutRight'}`} style={{ display: isOpen ? 'block' : 'none' }}>
                            <div className='sidebar-mobile-item sidebar-mobile-header-container'>
                                <h5 className='sidebar-mobile-header-title'>EMPRESA</h5>
                                <i className="bi bi-x-lg sidebar-mobile-close-icon" onClick={() => setIsOpen(false)}></i>
                            </div>

                            <div className='sidebar-mobile-item'>
                                <div className='sidebar-mobile-links-to-pages-container'>
                                    <div className='sidebar-mobile-link-to-pages-item'>
                                        <Link to={'/'} className='sidebar-mobile-link-to-page-link mb-3'>Home</Link>
                                        <Link to={'/shows'} className='sidebar-mobile-link-to-page-link mb-3'>Show Page</Link>
                                        <Link to={'/shows/selecao'} className='sidebar-mobile-link-to-page-link'>Votação</Link>
                                    </div>

                                    <div className='sidebar-mobile-link-to-pages-item'>
                                        <Link to={'/contato'} className='sidebar-mobile-link-to-page-link'>Fale Conosco</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='sidebar-mobile-item'>
                                <div className='sidebar-mobile-links-to-social-networks-container'>
                                    <div className='sidebar-mobile-links-to-social-networks-subcontainer'>
                                        <a href='https://www.instagram.com/boteco_paramazon/' target='_blank' className='sidebar-mobile-links-to-social-networks-link mb-3'>
                                            <i className="bi bi-instagram sidebar-mobile-instagram-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>Instagram</span>
                                        </a>

                                        <a href='https://www.facebook.com/botecoparamazon' target='_blank' className='sidebar-mobile-links-to-social-networks-link'>
                                            <i className="bi bi-facebook sidebar-mobile-facebook-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>Facebook</span>
                                        </a>
                                    </div>

                                    <div className='sidebar-mobile-links-to-social-networks-subcontainer'>
                                        <a href='#' className='sidebar-mobile-links-to-social-networks-link'>
                                            <i className="bi bi-whatsapp sidebar-mobile-whatsapp-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>Whatsapp</span>
                                        </a>
                                    </div>
                                </div>

                                <div className='sidebar-mobile-item'>
                                    <div className='sidebar-mobile-link-to-login-page-container'>
                                        <Link to={'/login'} className='sidebar-mobile-item-login-item'>
                                            <i className="bi bi-box-arrow-right sidebar-mobile-arrow-right-icon"></i>
                                            <span className='sidebar-mobile-item-login-text'>Login</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                )
            }
        </>
    );
};

export default Menu;
