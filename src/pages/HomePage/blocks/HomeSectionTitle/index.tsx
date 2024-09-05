import { Box } from "@mui/material";
import { IHomeSectionTitleProps } from "../../types/interfaces";

import './index.scss';

export const SectionTitle: React.FC<IHomeSectionTitleProps> = ({ title, subtitle, desc }: IHomeSectionTitleProps): JSX.Element => {
    return (
      <Box id="section-title-container">
        <div className='title'>{title.toUpperCase()}</div>
        <div className='subtitle'>{subtitle}</div>
        <div className='desc'>{desc}</div>
      </Box>
    );
  };