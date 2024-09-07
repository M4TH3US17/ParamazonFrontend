import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import { Avatar, Box, Menu as NavBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import Menu from './blocks/Menu/menu';
import { NavbarPage } from './types/objects';

import './index.scss';

const pages: NavbarPage[] = [
    new NavbarPage({ pageName: 'PAG. INICIAL', router: '/' }),
    new NavbarPage({ pageName: 'SOM AO VIVO', router: '/shows' }),
    new NavbarPage({ pageName: 'FALE CONOSCO', router: '/contato' }),
    new NavbarPage({ pageName: 'LOGIN', router: '/login' }),
];

export const NavBarComponent: React.FC<{}> = ({}: {}): JSX.Element => {
    const navigate = useNavigate();
    const handleNavigate = (route: string) => navigate(route);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return <AppBar position="static" className='app-bar'>
            <Container maxWidth="xl" className='app-bar-container'>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }} className='toolbar'>

                    <Box sx={{ flexGrow: 0 }} className="toolbar-box">
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, maxWidth: '48px' }} className="toolbar-box">
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={toggleSidebar} color="inherit">
                            <MenuIcon/>
                        </IconButton>

                        <Menu isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="toolbar-box">
                        {pages.map((page, index) => (
                            <Button key={index} onClick={() => handleNavigate(page.router)} className='toolbar-btn'>
                                { page.pageName }
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
};