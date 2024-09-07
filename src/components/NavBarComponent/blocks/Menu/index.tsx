import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import List from '@mui/material/List';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { SidebarItem } from '../SidebarItem';
import { NavbarPage as SidebarItemDetails } from '../../types/objects';

import './index.scss';

interface IMenuProps {
    isOpen: boolean;
    closeSidebar: () => void;
};

const pages: SidebarItemDetails[] = [
    new SidebarItemDetails({ pageName: 'PAG. INICIAL', router: '/', pageSubtitle: 'Acessar a pág. inicial', icon: <ImageIcon /> }),
    new SidebarItemDetails({ pageName: 'SOM AO VIVO', router: '/shows', pageSubtitle: 'Ver o próx. som ao vivo', icon: <ImageIcon /> }),
    new SidebarItemDetails({ pageName: 'FALE CONOSCO', router: '/contato', pageSubtitle: 'Deseja contatar nós?', icon: <ImageIcon /> }),
];

const pagesMore: SidebarItemDetails[] = [
    new SidebarItemDetails({ pageName: 'Login', router: '/login', icon: <ExitToAppIcon /> }),
    new SidebarItemDetails({ pageName: 'Configurações', router: '#', icon: <SettingsIcon /> }),
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
                {pages.map(menuItem => <SidebarItem details={menuItem} />)}
            </List>

            <Box className='' sx={{ width: '100%', padding: '20px 0 20px 0' }}>
                <nav aria-label="main mailbox folders">
                    {pagesMore.map(menuItem => <SidebarItem details={menuItem} isMoreSection={true} />)}
                </nav>
            </Box>
        </nav>
    </Box>
};

export default Menu;