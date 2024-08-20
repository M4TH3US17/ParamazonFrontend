import { Box } from "@mui/material";
import './home-section-title.css';

interface SectionTitleProps {
    title:    string;
    subtitle: string;
    desc:     string;
  }

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, desc }) => {
    return (
      <Box id="section-title-container">
        <div className='title'>{title.toUpperCase()}</div>
        <div className='subtitle'>{subtitle}</div>
        <div className='desc'>{desc}</div>
      </Box>
    );
  };