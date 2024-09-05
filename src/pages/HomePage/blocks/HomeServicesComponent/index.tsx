import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import { Section } from '../HomeSection';

import { IHomeSectionTitleProps, IHomeServicesProps } from '../../types/interfaces';

import './index.scss';
import { Box } from '@mui/material';

const servicos = [
  { id: 0, name: 'Entretenimento' }, { id: 1, name: 'Comidas' },
  { id: 2, name: 'Som ao vivo' },
  { id: 3, name: 'Card 4' },
  { id: 4, name: 'Card 5' },
];

const headerSection: IHomeSectionTitleProps = {
  title: "SERVIÇOS", 
  subtitle: "Veja aqui nossos Serviços", 
  desc: "service description, service description, service description, service description,..."
};

const HomeServicesComponent: React.FC<IHomeServicesProps> = ({}:IHomeServicesProps): JSX.Element => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Section
      hasPrimaryBg={true}
      header={headerSection}
      content={(
        <Box sx={{paddingBottom: '20px'}}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </Box>
      )}
    />
  );
};

export default HomeServicesComponent;