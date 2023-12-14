import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import './home-services-component.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { WIDTH_SCREEN } from '../../../../utils/ScreenUtils/screen-measurements-data';

const servicos = [
    { id: 0, name: 'Entretenimento' }, { id: 1, name: 'Comidas' },
    { id: 2, name: 'Som ao vivo' },
    { id: 3, name: 'Card 4' },
    { id: 4, name: 'Card 5' },
];

const HomeServicesComponent = () => {
    const [isMobileScreen, setMobileScreen] = useState<boolean>(WIDTH_SCREEN <= 700);

    return (
        <div className='home-service'>
            <div className='home-service-content'>

                <div className='home-service-content-text'>
                    <h2 className='home-service-content-text-title'>CONHEÇA NOSSOS SERVIÇOS</h2>
                    <h3 className='home-service-content-text-subtitle'>[Uma breve descriçao sobre a qualidade do serviço prestado.]</h3>
                </div>

                <div className='home-service-content-slide'>
                    <Swiper
                        autoplay={{ delay: 3000, disableOnInteraction: false, }}
                        slidesPerView={isMobileScreen ? 3 : 2}
                        spaceBetween={isMobileScreen ? 0 : 0}
                        pagination={{ clickable: true, }}
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={isMobileScreen ? {nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev'} : {}}
                        className="home-service-content-slide-container">

                        {servicos.map((x, index) => <SwiperSlide key={index} className='home-service-content-slide-item'><div className='home-service-content-slide-image' /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesComponent;