import React, { useEffect, useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import eventBus from '../../../utils/Events/EventBus';
import { WIDTH_SCREEN } from '../../../utils/ScreenUtils/screen-measurements-data';
import { Box } from '@mui/material';

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleEvent = (newState: boolean) => setIsOpen(newState);
        eventBus.on('toggleMenuHamburguerDesktop', handleEvent);
        return () => {
            eventBus.off('toggleMenuHamburguerDesktop', handleEvent);
        };
    }, []);

    let ehTelaDesktop = WIDTH_SCREEN > 730;

    useEffect(() => {
        /*console.log(scrollPosition);*/
        if (scrollPosition >= 100) setIsFixed(true);
        else setIsFixed(false);

        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);

    }, [setIsFixed, scrollPosition, setScrollPosition]);

    const displayMenu = (): string => {
        if (((WIDTH_SCREEN < 1280) && (WIDTH_SCREEN >= 1000)) && (isOpen == true)) {
            document.documentElement.classList.add('overflow-hidden');
            document.body.classList.add('overflow-hidden');
        } else if (isOpen == false) {
            document.documentElement.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        }

        if (((WIDTH_SCREEN < 1280) && (WIDTH_SCREEN >= 1000)) && (isOpen == true)) return 'block';
        else if (WIDTH_SCREEN >= 1280) return 'flex'
        else return 'none';
    }

    return (
        <>
            {
                ehTelaDesktop ? (
                    <>
                        <div className='menu-desktop-overlay' style={{ display: isOpen ? 'block' : 'none' }} />
                        <ul className='menu-desktop' style={{ display: displayMenu() }}>
                            <li className='menu-desktop-item'>
                                <Link to={'/'} className='menu-desktop-link'>
                                    <i className="bi bi-house-fill menu-desktop-link-icon" style={{ fontSize: '18px' }}></i> Home
                                </Link>
                            </li>

                            <li className='menu-desktop-item'>
                                <Link to={'/shows'} className='menu-desktop-link'>
                                    <i className="bi bi-star-fill menu-desktop-link-icon" style={{ fontSize: '17px', color: '#96a6b7' }}></i> Shows
                                </Link>
                            </li>

                            <li className='menu-desktop-item'>
                                <Link to={'/contato'} className='menu-desktop-link'>
                                    <i className="bi bi-telephone-forward-fill menu-desktop-link-icon" style={{ fontSize: '16px' }}></i> Contato
                                </Link>
                            </li>

                        </ul>
                    </>
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
                                <h5 className='sidebar-mobile-header-title'>Paramazon</h5>
                                <i className="bi bi-x-lg sidebar-mobile-close-icon" onClick={() => setIsOpen(false)}></i>
                            </div>

                            <div className='sidebar-mobile-item'>
                                <div className='sidebar-mobile-links-to-pages-container'>
                                    <div className='sidebar-mobile-link-to-pages-item'>
                                        <Link to={'/'} className='sidebar-mobile-link-to-page-link mb-3'>PAG. INICIAL</Link>
                                        <Link to={'/shows'} className='sidebar-mobile-link-to-page-link mb-3'>SOM AO VIVO</Link>
                                        <Link to={'/shows/selecao'} className='sidebar-mobile-link-to-page-link'>VOTAÇÃO</Link>
                                    </div>

                                    <div className='sidebar-mobile-link-to-pages-item'>
                                        <Link to={'/contato'} className='sidebar-mobile-link-to-page-link'>FALE CONOSCO</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='sidebar-mobile-item'>
                                <div className='sidebar-mobile-links-to-social-networks-container'>
                                    <div className='sidebar-mobile-links-to-social-networks-subcontainer'>
                                        <a href='https://www.instagram.com/boteco_paramazon/' target='_blank' className='sidebar-mobile-links-to-social-networks-link mb-3'>
                                            <i className="bi bi-instagram sidebar-mobile-instagram-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>INSTAGRAM</span>
                                        </a>

                                        <a href='https://www.facebook.com/botecoparamazon' target='_blank' className='sidebar-mobile-links-to-social-networks-link'>
                                            <i className="bi bi-facebook sidebar-mobile-facebook-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>FACEBOOK</span>
                                        </a>
                                    </div>

                                    <div className='sidebar-mobile-links-to-social-networks-subcontainer'>
                                        <a href='#' className='sidebar-mobile-links-to-social-networks-link'>
                                            <i className="bi bi-whatsapp sidebar-mobile-whatsapp-icon" style={{ marginRight: '20px' }}></i>
                                            <span className='sidebar-mobile-links-to-social-networks-link-text'>WHATSAPP</span>
                                        </a>
                                    </div>
                                </div>

                                <div className='sidebar-mobile-item'>
                                    <div className='sidebar-mobile-link-to-login-page-container'>
                                        <Link to={'/login'} className='sidebar-mobile-item-login-item'>
                                            <i className="bi bi-box-arrow-right sidebar-mobile-arrow-right-icon"></i>
                                            <span className='sidebar-mobile-item-login-text'>LOGIN</span>
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