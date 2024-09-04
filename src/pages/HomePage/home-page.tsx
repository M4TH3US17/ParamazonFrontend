import React, { useEffect, useContext, useState } from 'react';
import HomeBanner from './componentes/HomeBannerComponent/home-banner-component';
import HomeServicesComponent from './componentes/HomeServicesComponent/home-services-component';
import HomeCardLinks from './componentes/HomeCardLink/home-card-link';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import Menu from '../../components/NavBarComponent/Menu/menu';
import { HomeLocaleComponent } from './componentes/HomeLocaleComponent/home-locale-component';
import { IHomePageProps } from './types/interfaces';

import './home-page.css';
import { FooterComponent } from '../../components/FooterComponent/footer-component';
import { NavBarComponent } from '../../components/NavBarComponent/navbar-component';

export const Home: React.FC<IHomePageProps> = ({}:IHomePageProps): JSX.Element => {
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

            <div className='app-home-content'>
            {WIDTH_SCREEN <= 1279 ? (<div className='app-navbar-content-item'><Menu /></div>) : (<></>)}
                <div className='app-home-content-container'>
                    
                    <HomeBanner />
                    <HomeLocaleComponent />
                    <HomeServicesComponent />
                    <HomeCardLinks />

                </div>
            </div>
            <FooterComponent />
        </main>
        </>
    );
};

export default Home;