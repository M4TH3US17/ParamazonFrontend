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

import './menu.css';


const Menu: React.FC<{ isOpenSidebar?: boolean }> = ({ isOpenSidebar = false }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
        if (!clicked)
            setClicked((prev) => !prev);
        else
            setTimeout(() => setClicked((prev) => !prev), 1000);
    }

    useEffect(() => {
        handleClick()
        console.log('teste 2 ', clicked)
    }, [isOpenSidebar])

    return <>
        <Box>
            <div className='sidebar-mobile-bg-effect' style={{ display: show ? 'block' : 'none' }} onClick={handleClick} />

            <nav className={`sidebar-mobile animate__animated ${clicked ? 'animate__slideInRight' : 'animate__slideOutRight'}`} style={{ display: show ? 'block' : 'none' }}>
                <Box className='sidebar-mobile-item sidebar-mobile-header-container divider-bottom'>
                    <h5 className='sidebar-mobile-header-title'>Paramazon</h5>
                    <i className="bi bi-x-lg sidebar-mobile-close-icon" onClick={handleClick}></i>
                </Box>

                <List className='divider-bottom' sx={{ width: '100%', padding: '20px 0 20px 0' }}>
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