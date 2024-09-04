import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../../../assets/images/paramazon.png';
import { Button, Container, Typography, Grid } from '@mui/material';
import { IHomeBannerProps } from '../../types/interfaces';

import './home-banner-component.scss';

export const HomeBannerComponent: React.FC<IHomeBannerProps> = ({}: IHomeBannerProps): JSX.Element => {

    let bannerHTML = (<section className="hero-section" id="home">
        <Container>
            <Grid container spacing={4} justifyContent="center">
                <Grid item lg={6} xs={12}>
                    <div className="hero-wrapper">
                        <Typography variant="h1" component="h1" className='hero-section-title' sx={{ mb: 4 }}>
                            <span className="text-primary"> Boteco Paramazon: </span> venha sentir a emoção do nosso ambiente!
                        </Typography>
                        <Typography variant="body1" className='hero-section-subtitle'>
                            Aqui a resenha flui tão natural quanto o encontro das águas
                        </Typography>
                        <div className="mt-4">
                            <Button variant="contained" color="primary" className='btn-locale' component={Link} to="#" sx={{ mt: 2, mr: 2 }}>
                                Localização
                            </Button>
                            <Button variant="contained" color="success" component={Link} className='btn btn-faleconosco' to="#" sx={{ mt: 2, ml: 1 }}>
                                Fale Conosco
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={6} xs={12} className='grid-img'>
                    <div className="home-img mt-5 mt-lg-0">
                        <img src={homeImg} alt="Descrição da Imagem" className="img-fluid mx-auto d-block" />
                    </div>
                </Grid>
            </Grid>
        </Container>

        <div className="onda">
            <svg className='onda-svg' viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,30 C150,100 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z"></path>
            </svg>
        </div>
    </section>)

    return bannerHTML;
};

export default HomeBannerComponent;

/*
interface SectionProps {
    // Adicione props se necessário
}

const Section: React.FC<SectionProps> = () => {
    return (
        <section className="hero-section" id="home">
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item lg={6} xs={12}>
                        <div className="hero-wrapper">
                            <Typography variant="body2" component="p" sx={{ textTransform: 'uppercase', fontSize: '16px' }}>
                                Discover Paramazon Today
                            </Typography>
                            <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
                                <span className="text-primary"> Boteco Paramazon: </span> venha sentir a emoção do nosso ambiente!
                            </Typography>
                            <Typography variant="body1">
                                Aqui a resenha flui tão natural quanto o encontro das águas
                            </Typography>
                            <div className="mt-4">
                                <Button variant="contained" color="primary" component={Link} to="#" sx={{ mt: 2, mr: 2 }}>
                                    Localização
                                </Button>
                                <Button variant="contained" color="success" component={Link} to="#" sx={{ mt: 2, ml: 1 }}>
                                    Fale Conosco
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <div className="home-img mt-5 mt-lg-0">
                            <img src={homeImg} alt="Descrição da Imagem" className="img-fluid mx-auto d-block" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

*/