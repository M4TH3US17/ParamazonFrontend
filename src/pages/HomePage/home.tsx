import React, {useEffect, useContext, useState } from 'react';
import NavBar from '../../components/NavBar/navbar';
import './home.css';
import HomeBanner from './componentes/HomeBanner/home-banner';
import HomeVoting from './componentes/HomeVoting/home-voting';
import HomeServices from './componentes/HomeServices/home-services';
import HomeFaleConosco from './componentes/HomeFaleConosco/home-fale-conosco';
import Footer from '../../components/Footer/footer';

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
            <NavBar/>

            <div className='app-home-content'>
                {ehTelaDesktop ? (<></>) : (<HomeBanner />)}
                <HomeVoting />
                <HomeFaleConosco scrollYPosition={scrollPosition}/>
                <HomeServices />
                <Footer />
            </div>
        </main>
    );
};

export default Home;