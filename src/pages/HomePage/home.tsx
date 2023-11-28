import React, {useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar/navbar';
import './home.css';
import HomeBanner from './componentes/HomeBanner/home-banner';
import HomeVoting from './componentes/HomeVoting/home-voting';
import HomeContactUs from './componentes/HomeContactUs/home-contact-us';

const Home = () => {

    let ehTelaDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 730;

    return (
        <main className='app-home'>
            <NavBar/>

            <div className='app-home-content'>
                {ehTelaDesktop ? (<></>) : (<HomeBanner />)}
                <HomeVoting />
                <HomeContactUs />
            </div>
        </main>
    );
};

export default Home;