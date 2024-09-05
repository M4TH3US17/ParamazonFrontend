import { Box } from '@mui/material';
import { IHomeSectionProps } from '../../types/interfaces';

import { SectionTitle } from '../HomeSectionTitle';

import './index.scss'

export const Section: React.FC<IHomeSectionProps> = ({ content, hasPrimaryBg = false, header = undefined }: IHomeSectionProps): JSX.Element => {

    return (
        <Box id="section" sx={{ backgroundColor: (hasPrimaryBg) ? 'rgb(248, 250, 254)' : 'none' }}>
            { (header !== undefined) && <SectionTitle title={header.title} subtitle={header.subtitle} desc={header.desc}/> }

            { content }
        </Box>
    );

};