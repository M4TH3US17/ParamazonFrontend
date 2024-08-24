import React, { useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import { EventCard } from './components/EventCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/swiper-bundle.min.css'; 

import './show-page.scss';
import '../../pages/HomePage/componentes/HomeServicesComponent/home-services-component.css'

const ShowPage = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty('--progress', String(1 - progress));

    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return <Box className='showpage'>
    <NavBarComponent />

    <Box className='showpage-content'>

      <Grid item lg={6} xs={12}>
        <div className="hero-wrapper event-text">
          <Typography variant="h1" component="h1" className='hero-section-title' sx={{ mb: 4 }}>
            Descubra nossos eventos incríveis!
          </Typography>

          <Typography variant="body1" className='hero-section-subtitle'>
            Explore nossa programação e fique por dentro de todas as atrações e novidades.
          </Typography>
        </div>
      </Grid>

      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} onAutoplayTimeLeft={onAutoplayTimeLeft} className="events">
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
      </Swiper>

    </Box>
  </Box>
}


export default ShowPage;