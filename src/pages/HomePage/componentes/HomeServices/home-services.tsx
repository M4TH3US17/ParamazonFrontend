import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import './home-services.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const HomeServices = () => {
    const servicos = [
        { id: 0, name: 'Entretenimento' },
        { id: 1, name: 'Comidas' },
        { id: 2, name: 'Som ao vivo' },
        { id: 3, name: 'Card 4' },
        { id: 4, name: 'Card 5' },
    ];

    return (
        <div className='home-service'>
            {/*<div className='home-service-text'>
                <h2 className='home-service-text-title'>Nossos servicos</h2>
    </div>*/}

            <Swiper
                style={{ height: '200px' }}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ clickable: true, }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {servicos.map((x, index) => (
                    <SwiperSlide className='home-servico-slide'>
                        <div className="card">
                            <div className="card-img-top" />
                            {/*<div className="card-body">
                                <h5 className="card-title">{x.name}</h5>
                                <p className="card-text">description.</p>
                </div>*/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeServices;