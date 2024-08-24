import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Divider, ListItemButton, ListItemIcon } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import eventBus from '../../../utils/Events/EventBus';
import { WIDTH_SCREEN } from '../../../utils/ScreenUtils/screen-measurements-data';
import './menu.css';


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


    // NOVO TOGGLE
    const [clicked, setClicked] = useState<boolean | undefined>(false);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
        if (!clicked)
            setClicked((prev) => !prev);
        else
            setTimeout(() => setClicked((prev) => !prev), 1000);
    }

    return (<>
            {
                ehTelaDesktop ?
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
                    :
                    <>
                        <Box>
                            <ul className='menu-mobile' style={{ position: isFixed ? 'fixed' : 'absolute', top: isFixed ? '0px' : '100px' }}>
                                <li className='menu-item-mobile'><Link to={'/'}><i className="bi bi-house-door-fill"></i></Link></li>
                                <li className='menu-item-mobile'><Link to={'/shows'}><i className="bi bi-star-fill"></i></Link></li>
                                <li className='menu-item-mobile' onClick={handleClick}><i className="bi bi-list"></i></li>
                            </ul>

                            <div className='sidebar-mobile-bg-effect' style={{ display: show ? 'block' : 'none' }} onClick={handleClick}/>

                            <nav className={`sidebar-mobile animate__animated ${show ? 'animate__slideInRight' : 'animate__slideOutRight'}`}>
                                <Box className='sidebar-mobile-item sidebar-mobile-header-container divider-bottom'>
                                    <h5 className='sidebar-mobile-header-title'>Paramazon</h5>
                                    <i className="bi bi-x-lg sidebar-mobile-close-icon" onClick={handleClick}></i>
                                </Box>

                                <List  className='divider-bottom' sx={{ width: '100%', padding: '20px 0 20px 0'}}>
                                    <Link to={'/'}>
                                        <SidebarPageItem icon={<ImageIcon />} title='PAG. INICIAL' subtitle='Acessar a pág. inicial' />
                                    </Link>

                                    <Link to={'/shows'}>
                                        <SidebarPageItem icon={<ImageIcon />} title='SOM AO VIVO' subtitle='Ver o próx. som ao vivo' />
                                    </Link>

                                    <Link to={'/contato'}>
                                        <SidebarPageItem icon={<ImageIcon />} title='FALE CONOSCO' subtitle='Deseja contatar nós?' />
                                    </Link>

                                    <Link to={'/shows/selecao'}>
                                        <SidebarPageItem icon={<ImageIcon />} title='VOTAÇÃO' subtitle='Decidir um som ao vivo' />
                                    </Link>
                                </List>

                                <Box className='' sx={{ width: '100%', padding: '20px 0 20px 0' }}>
                                    <nav aria-label="main mailbox folders">
                                        <Link to={'/login'}>
                                            <SidebarMoreItem icon={<ExitToAppIcon />} title='Login' />
                                        </Link>

                                        <Link to={'#'}>
                                            <SidebarMoreItem icon={<SettingsIcon />} title='Configurações' />
                                        </Link>
                                    </nav>
                                </Box>
                            </nav>
                        </Box>
                    </>
            }
        </>
    );
};


/* LIST ITENS*/
const SidebarPageItem: React.FC<{ icon?: JSX.Element, title?: string, subtitle?: string }> = ({ icon = <ImageIcon />, title = 'Title', subtitle = 'Subtitle' }) => {
    return <ListItem sx={{ padding: '0' }}>
        <ListItemButton sx={{ padding: '0' }} className='sidebar-page-item'>
            <ListItemAvatar>
                <Avatar>
                    {icon}
                </Avatar>
            </ListItemAvatar>

            <ListItemText primary={title} secondary={subtitle} />
        </ListItemButton>
    </ListItem>
};

const SidebarMoreItem: React.FC<{ icon?: JSX.Element, title?: string }> = ({ icon = <ImageIcon />, title = 'Title' }) => {
    return <ListItem disablePadding>
        <ListItemButton sx={{ paddingLeft: '0' }} className='sidebar-more-item'>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    </ListItem>
};

export default Menu;