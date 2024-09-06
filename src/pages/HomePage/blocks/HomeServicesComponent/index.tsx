import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import { Section } from '../HomeSection';
import { IHomeSectionTitleProps, IHomeServicesProps } from '../../types/interfaces';
import { Box } from '@mui/material';
import { WIDTH_SCREEN } from '../../../../utils/ScreenUtils/screen-measurements-data';

import './index.scss';

const headerSection: IHomeSectionTitleProps = {
  title: "SERVIÇOS",
  subtitle: "Veja aqui nossos Serviços",
  desc: "service description, service description, service description, service description,..."
};

const HomeServicesComponent: React.FC<IHomeServicesProps> = ({ }: IHomeServicesProps): JSX.Element => {

  return (
    <Section
      hasPrimaryBg={true}
      header={headerSection}
      content={(
        <Box sx={{ paddingBottom: '20px' }}>
          <SlideService />
        </Box>
      )}
    />
  );
};


const SlideService: React.FC<{ }> = ({ }): JSX.Element => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const [isMobileScreen] = useState<boolean>(WIDTH_SCREEN <= 1000);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty('--progress', String(1 - progress));

    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return <>{
    isMobileScreen ? <Swiper
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
    </Swiper> : <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  }</>
}

export default HomeServicesComponent;