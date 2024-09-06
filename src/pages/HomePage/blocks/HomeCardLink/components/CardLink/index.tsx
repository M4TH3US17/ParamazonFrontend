import { IHomeCardLinkProps } from '../../../../types/interfaces';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './index.scss'

const HomeCardLinkComponent: React.FC<IHomeCardLinkProps> = ({ url, title = "", description, icon }: IHomeCardLinkProps): JSX.Element => {

    return <ListItem className='card-link-item'>
            <ListItemText primary={title} secondary={description}  className='text'/>
            <ArrowForwardIosIcon className='icon'/>
        </ListItem>
};

export default HomeCardLinkComponent;