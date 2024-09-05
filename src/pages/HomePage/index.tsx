import React, { useEffect, useState } from 'react';
import HomeBanner from './blocks/HomeBannerComponent';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import Menu from '../../components/NavBarComponent/blocks/Menu/menu';
import { IHomePageProps } from './types/interfaces';

import { Box } from '@mui/material';

import { HomeCardLinks } from './blocks/HomeCardLink';
import { HomeLocaleComponent } from './blocks/HomeLocaleComponent';
import HomeServicesComponent from './blocks/HomeServicesComponent';

import { FooterComponent } from '../../components/FooterComponent';
import { NavBarComponent } from '../../components/NavBarComponent';

import './index.scss';

export const HomePage: React.FC<IHomePageProps> = ({}:IHomePageProps): JSX.Element => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, setScrollPosition]);


    return (
        <>
         <main className='app-home'>
            <NavBarComponent />

            <Box className='app-home-content'>
            { (WIDTH_SCREEN <= 1279) && <Box className='app-navbar-content-item'><Menu /></Box> }
                <Box className='app-home-content-container'>
                    
                    <HomeBanner />
                    <HomeLocaleComponent />
                    <HomeServicesComponent />
                    <HomeCardLinks />

                </Box>
            </Box>

            <FooterComponent />
        </main>
        </>
    );
};