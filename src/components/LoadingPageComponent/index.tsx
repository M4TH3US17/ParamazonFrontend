import { Box, Typography } from '@mui/material';
import logoSRC from '../../assets/images/paramazon.png';

import './index.css';

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