import React from 'react';
import './home-banner-component.css';
import Flickity from 'react-flickity-component';
import { WIDTH_SCREEN } from '../../../../utils/ScreenUtils/screen-measurements-data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import "swiper/css";

const HomeBannerComponent = () => {
    let bannerHTML = (
        <div className='home-banner-componente'>
            <div className='home-banner-image' />
            <div className='home-banner-content'>
                <div className='home-banner-background' />
                <div className='carousel-componente-overlay' />
            </div>
        </div>
    );

    return bannerHTML;
};

export default HomeBannerComponent;