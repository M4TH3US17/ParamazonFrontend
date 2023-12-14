import React, { useEffect, useContext, useState } from 'react';
import './home-page.css';
import HomeBanner from './componentes/HomeBannerComponent/home-banner-component';
import HomeServicesComponent from './componentes/HomeServicesComponent/home-services-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import HomeCardLinks from './componentes/HomeCardLink/home-card-link';

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

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
                <div className='app-home-content-container'>

                    {/*ehTelaDesktop ? (<></>) :*/ (<HomeBanner />)}
                    <HomeCardLinks />
                    <HomeServicesComponent />
                </div>
            </div>
            <FooterComponent />
        </main>
    );
};

export default Home;