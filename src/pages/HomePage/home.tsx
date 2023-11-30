import React, {useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar/navbar';
import './home.css';
import HomeBanner from './componentes/HomeBanner/home-banner';
import HomeVoting from './componentes/HomeVoting/home-voting';
import HomeServices from './componentes/HomeServices/home-services';
import HomeFaleConosco from './componentes/HomeFaleConosco/home-fale-conosco';
import Footer from '../../components/Footer/footer';

const Home = () => {

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

    return (
        <main className='app-home'>
            <NavBar/>

            <div className='app-home-content'>
                {ehTelaDesktop ? (<></>) : (<HomeBanner />)}
                <HomeVoting />
                <HomeFaleConosco />
                <Footer />
                {/*<HomeServices />*/}
            </div>
        </main>
    );
};

export default Home;