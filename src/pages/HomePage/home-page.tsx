import React, { useEffect, useContext, useState } from 'react';
import './home-page.css';
import HomeBanner from './componentes/HomeBannerComponent/home-banner-component';
import HomeServicesComponent from './componentes/HomeServicesComponent/home-services-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import HomeCardLinks from './componentes/HomeCardLink/home-card-link';
import { WIDTH_SCREEN } from '../../utils/ScreenUtils/screen-measurements-data';
import Menu from '../../components/NavBarComponent/Menu/menu';
import { LoadingPageComponent } from '../../components/LoadingPageComponent/loading-page-component';
import { HomeLocaleComponent } from './componentes/HomeLocaleComponent/home-locale-component';

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [loadingVisible, setLoadingVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, setScrollPosition]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingVisible(false);
        }, 2500); // 5000ms = 5s

        // Clean up the timer if the component is unmounted before the timer completes
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
         {loadingVisible && <LoadingPageComponent />}

         <main className='app-home'>
            <NavBarComponent />

            <div className='app-home-content'>
            {WIDTH_SCREEN <= 1279 ? (<div className='app-navbar-content-item'><Menu /></div>) : (<></>)}
                <div className='app-home-content-container'>

                    <HomeBanner />
                    <HomeCardLinks />
                    <HomeServicesComponent />
                    <HomeLocaleComponent />
                </div>
            </div>
            <FooterComponent />
        </main>
        </>
    );
};

export default Home;