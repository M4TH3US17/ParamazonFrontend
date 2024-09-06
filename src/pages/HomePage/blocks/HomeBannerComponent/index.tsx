import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../../../assets/images/paramazon.png';
import { Button, Container, Typography, Grid, Box } from '@mui/material';
import { IHomeBannerProps } from '../../types/interfaces';

import './index.scss';

export const HomeBannerComponent: React.FC<IHomeBannerProps> = ({}: IHomeBannerProps): JSX.Element => {

    return <Box component="section" className="hero-section" id="home">

        <Container className='banner-container'>
            <Grid container spacing={4} className='banner-content'>
                <Grid item lg={6} xs={12} className='banner-text'>
                    <Box className="hero-wrapper text-container">
                        <Typography variant="h1" component="h1" className='hero-section-title text-title' sx={{ mb: 4 }}>
                            <span className="text-primary"> Boteco Paramazon: </span> venha sentir a emoção do nosso ambiente!
                        </Typography>

                        <Typography variant="body1" className='hero-section-subtitle text-subtitle'>
                            Aqui a resenha flui tão natural quanto o encontro das águas
                        </Typography>

                        <Box className="mt-4 btn-box">
                            <Button variant="contained" color="primary" className='btn-locale' component={Link} to="#" sx={{ mt: 2, mr: 2 }}>
                                Localização
                            </Button>

                            <Button variant="contained" color="success" component={Link} className='btn btn-faleconosco' to="#" sx={{ mt: 2, ml: 1 }}>
                                Fale Conosco
                            </Button>
                        </Box>

                    </Box>
                </Grid>
                
                <Grid item lg={6} xs={12} className='banner-image'>
                    <Box className="image-box mt-5 mt-lg-0">
                        <img src={homeImg} alt="Descrição da Imagem" className="image mx-auto" />
                    </Box>
                </Grid>
            </Grid>
        </Container>

        <Box className="wave-container">
            <svg className='wave-svg' viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,30 C150,100 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z"></path>
            </svg>
        </Box>

    </Box>
};

export default HomeBannerComponent;