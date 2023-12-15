import React, { useEffect, useContext, useState } from 'react';
import './home-page.css';
import HomeBanner from './componentes/HomeBannerComponent/home-banner-component';
import HomeServicesComponent from './componentes/HomeServicesComponent/home-services-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import HomeCardLinks from './componentes/HomeCardLink/home-card-link';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import Menu from '../../components/NavBarComponent/Menu/menu';

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, setScrollPosition]);

    return (
        <main className='app-home'>
            <NavBarComponent />

            <div className='app-home-content'>
            {WIDTH_SCREEN <= 1279 ? (<div className='app-navbar-content-item'><Menu /></div>) : (<></>)}
                <div className='app-home-content-container'>

                    <HomeBanner />
                    <HomeCardLinks />
                    <HomeServicesComponent />
                </div>
            </div>
            <FooterComponent />
        </main>
    );
};

export default Home;