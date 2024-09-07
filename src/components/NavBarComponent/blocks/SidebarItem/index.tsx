import { Link } from "react-router-dom";

import { Avatar, ListItemButton, ListItemIcon } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { NavbarPage as SidebarItemDetails } from '../../types/objects';

import './index.scss';

interface ISidebarItemProps {
    details: SidebarItemDetails;
     isMoreSection?: boolean;
}

export const SidebarItem: React.FC<ISidebarItemProps> = ({ details, isMoreSection = false }: ISidebarItemProps): JSX.Element => {

    return <Link to={details.router}>
        {
            isMoreSection ?
                <ListItem disablePadding>
                    <ListItemButton sx={{ paddingLeft: '0' }} className='sidebar-more-item'>
                        <ListItemIcon>
                            {details.icon}
                        </ListItemIcon>
                        <ListItemText primary={details.pageName} />
                    </ListItemButton>
                </ListItem>
                :
                <ListItem sx={{ padding: '0' }}>
                    <ListItemButton sx={{ padding: '0' }} className='sidebar-page-item'>
                        <ListItemAvatar>
                            <Avatar>
                                {details.icon}
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={details.pageName} secondary={details.pageSubtitle} />
                    </ListItemButton>
                </ListItem>
        }
    </Link>

};