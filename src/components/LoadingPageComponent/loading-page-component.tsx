import { Box, Typography } from '@mui/material';
import './loading-page-component.css';
import logoSRC from '../../assets/images/paramazon.png';

export const LoadingPageComponent: React.FC<{}> = ({}: {}): JSX.Element => {

    return <Box className='loading-page-container'>

        <Box className='logo-content'>
            <div>
                <img src={logoSRC} className='image animate__animated animate__zoomIn' />
                <Typography className='author animate__animated animate__zoomIn'>Developed by  <strong>Matheus Dalvino</strong></Typography>
            </div>
        </Box>

    </Box>
};