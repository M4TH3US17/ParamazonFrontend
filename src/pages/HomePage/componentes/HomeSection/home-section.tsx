import { Box, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';
import { IHomeSectionProps } from '../../types/interfaces';

import './home-section.scss'

export const Section: React.FC<IHomeSectionProps> = ({ content, hasPrimaryBg = false }: IHomeSectionProps): JSX.Element => {

    const sectionStyle: SxProps<Theme> = {
        backgroundColor: (hasPrimaryBg) ? 'rgb(248, 250, 254)' : 'none',
    };

    return (
        <Box id="section" sx={sectionStyle}>
            {content}
        </Box>
    );

};