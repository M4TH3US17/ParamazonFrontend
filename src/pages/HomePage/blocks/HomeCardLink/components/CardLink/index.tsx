import { IHomeCardLinkProps } from '../../../../types/interfaces';
import { Link } from 'react-router-dom';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import './index.scss'
import { Box, Typography } from '@mui/material';

const HomeCardLinkComponent: React.FC<IHomeCardLinkProps> = ({ url, title = "", description, icon }: IHomeCardLinkProps): JSX.Element => {

    return (
        <Box className='card-link-item'>

            <Box className='text-container'>
                <Typography variant='h2' className='text-title'>{title}</Typography>
            </Box>

            <Link to={url} className='link-container'>
                <Box className='image-container'>
                        <ListItemAvatar className='link-image-bg'>
                            <Avatar>
                                {icon}
                            </Avatar>
                        </ListItemAvatar>

                    <Typography className='link-text-title animate__animated'>{description}</Typography>
                </Box>

                <svg className='link-icon-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
                    <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
                </svg>
            </Link>

        </Box>
    );
};

export default HomeCardLinkComponent;