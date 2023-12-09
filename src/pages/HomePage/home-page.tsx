import React, {useEffect, useContext, useState } from 'react';
import './home-page.css';
import HomeBanner from './componentes/HomeBannerComponent/home-banner-component';
import HomeCardFaleConoscoComponent from './componentes/HomeCardFaleConoscoComponent/home-card-fale-conosco-component';
import HomeCardVotingComponent from './componentes/HomeCardVotingComponent/home-card-voting-component';
import HomeServicesComponent from './componentes/HomeServicesComponent/home-services-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';

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
            <NavBarComponent/>

            <div className='app-home-content'>
                {ehTelaDesktop ? (<></>) : (<HomeBanner />)}
                <HomeCardVotingComponent />
                <HomeCardFaleConoscoComponent />
                <HomeServicesComponent />
                <FooterComponent />
            </div>
        </main>
    );
};

export default Home;