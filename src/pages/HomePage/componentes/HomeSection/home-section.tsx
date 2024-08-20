import { Box, SxProps } from '@mui/material';
import './home-section.css'
import { Theme } from '@emotion/react';

interface SectionProps {
    content: JSX.Element;
    hasPrimaryBg?: boolean;
}

export const Section: React.FC<SectionProps> = ({ content, hasPrimaryBg = false }) => {

    const sectionStyle: SxProps<Theme> = {
        backgroundColor: (hasPrimaryBg) ? 'rgb(248, 250, 254)' : 'none',
    };

    return (
        <Box id="section" sx={sectionStyle}>
            {content}
        </Box>
    );

};