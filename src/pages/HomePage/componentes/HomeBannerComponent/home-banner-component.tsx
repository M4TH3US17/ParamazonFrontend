import React from 'react';
import './home-banner-component.css';
import Flickity from 'react-flickity-component';
import { WIDTH_SCREEN } from '../../../../utils/ScreenUtils/screen-measurements-data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import "swiper/css";

const HomeBannerComponent = () => {
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
            <div className='current-image' style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sexta.jpg)` }} />
            <div className='carousel-componente-overlay' />
    
            <Swiper className="carousel">

                <SwiperSlide className="carousel c1" style={{ backgroundImage: `url(https://gerlan06.github.io/Boteco-Paramazon/img/sexta.jpg)` }}></SwiperSlide>
                
            </Swiper>
    
        </div>
    );

    return (WIDTH_SCREEN <= 700) ? bannerMobile : bannerDesktop;
};

export default HomeBannerComponent;