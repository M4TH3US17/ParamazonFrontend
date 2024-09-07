import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, ListItemButton, ListItemIcon } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { NavbarPage as MenuPage } from '../../types/objects';

import './index.scss';

const pages: MenuPage[] = [
    new MenuPage({ pageName: 'PAG. INICIAL', router: '/', pageSubtitle: 'Acessar a pág. inicial', icon:  <ImageIcon />}),
    new MenuPage({ pageName: 'SOM AO VIVO', router: '/shows', pageSubtitle: 'Ver o próx. som ao vivo', icon:  <ImageIcon />}),
    new MenuPage({ pageName: 'FALE CONOSCO', router: '/contato', pageSubtitle: 'Deseja contatar nós?', icon: <ImageIcon />}),
];

const pagesMore: MenuPage[] = [
    new MenuPage({ pageName: 'Login', router: '/login', icon: <ExitToAppIcon /> }),
    new MenuPage({ pageName: 'Configurações', router: '#', icon: <SettingsIcon /> }),
];

const Menu: React.FC<IMenuProps> = ({ isOpen, closeSidebar }: IMenuProps) => {
    if (!isOpen) return null;

    return <Box>
            <div className='sidebar-bg-effect' onClick={closeSidebar} style={{ display: isOpen ? 'block' : 'none' }} />

            <nav className={`sidebar animate__animated ${isOpen ? 'animate__slideInRight' : 'animate__slideOutRight'}`} style={{ display: isOpen ? 'block' : 'none' }}>
                <Box className='sidebar-header divider-bottom'>
                    <h5 className='sidebar-header-title'>Paramazon</h5>
                    <i className="bi bi-x-lg sidebar-closeIcon" onClick={closeSidebar}></i>
                </Box>

                <List className='divider-bottom' sx={{ width: '100%', padding: '20px 0 20px 0' }}>
                    {
                        pages.map(menuItem => <Link to={menuItem.router}>
                            <SidebarPageItem icon={menuItem.icon} title={menuItem.pageName} subtitle={menuItem.pageSubtitle} />
                        </Link>)
                    }
                </List>

                <Box className='' sx={{ width: '100%', padding: '20px 0 20px 0' }}>
                    <nav aria-label="main mailbox folders">
                        {
                            pagesMore.map(menuItem => <Link to={menuItem.router}>
                                <SidebarMoreItem icon={menuItem.icon} title={menuItem.pageName} />
                            </Link>)
                        }
                    </nav>
                </Box>
            </nav>
        </Box>
};

interface IMenuProps {
    isOpen: boolean;
    closeSidebar: () => void;
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