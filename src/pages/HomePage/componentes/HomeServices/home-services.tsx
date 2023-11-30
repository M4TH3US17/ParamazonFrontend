import React from 'react';
import './home-services.css';
import Flickity from 'react-flickity-component';

const HomeServices = () => {
    const flickityOptions = {
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: true,
    };

    return (
        <div className='home-services'>
            <h2 className='home-services-title'> Serviços </h2>
            
            <Flickity className={'carousel home-services-container'} options={flickityOptions}>
                
                    <div className='carousel home-services-card services-bg-1'>
                    <h3 className='home-services-card-title'>Cervejas gelada!!</h3>
                    </div>

                    <div className='carousel home-services-card services-bg-2'>
                    <h3 className='home-services-card-title t3'>Tacaca Original Paraense aos domingos</h3>
                    </div>

                    <div className='carousel home-services-card services-bg-3'>
                        <h3 className='home-services-card-title t3'>Trasmissão ao Vivo de jogos e lutas de MMA.</h3>
                    </div>

                    <div className='carousel home-services-card services-bg-4'>
                    <h3 className='home-services-card-title'>Caipifrutas</h3>
                    </div>
          </Flickity>
        </div>
    );
};

export default HomeServices;