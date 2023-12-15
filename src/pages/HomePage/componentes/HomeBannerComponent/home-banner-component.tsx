import React from 'react';
import './home-banner-component.css';
import Flickity from 'react-flickity-component';
import { WIDTH_SCREEN } from '../../../../utils/ScreenUtils/screen-measurements-data';

const HomeBannerComponent = () => {
    return (WIDTH_SCREEN <= 700) ? bannerMobile : bannerDesktop;
};

const flickityOptions = {
    imagesLoaded: true,
    pageDots: true,
    prevNextButtons: true,
};

let bannerMobile = (
    <Flickity className={'carousel'} options={flickityOptions}>
        <div className="carousel c1" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sexta.jpg)` }}>
        </div>

        <div className="carousel c2" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sabad%C3%A3o%20mix.jpg)` }}>
        </div>

        <div className="carousel c3" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/domingueira.jpg)` }}>
        </div>
    </Flickity>);

let bannerDesktop = (
    <div className='carousel-componente'>
        <div className='carousel-componente-overlay'/>
        
        <Flickity className={'carousel'} options={flickityOptions}>

            <div className="carousel c1" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sexta.jpg)` }}>
                <div className='carousel-container'>
                    <div className='carousel-image' />

                    <div className='carousel-text-container'>
                        <h2 className='carousel-text-title'>title</h2>
                        <p className='carousel-text-description'></p>
                    </div>
                </div>
            </div>

            <div className="carousel c2" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sabad%C3%A3o%20mix.jpg)` }}>
                <div className='carousel-container'>
                    <div className='carousel-image' />

                    <div className='carousel-text-container'>
                        <h2 className='carousel-text-title'>title</h2>
                        <p className='carousel-text-description'></p>
                    </div>
                </div>
            </div>

            <div className="carousel c3" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/domingueira.jpg)` }}>
                <div className='carousel-container'>
                    <div className='carousel-image' />

                    <div className='carousel-text-container'>
                        <h2 className='carousel-text-title'>title</h2>
                        <p className='carousel-text-description'></p>
                    </div>
                </div>
            </div>

        </Flickity>
    </div>);

export default HomeBannerComponent;