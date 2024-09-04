import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { EventCard } from './components/EventCard';
import srcLogo from '../../assets/images/paramazon.png';

import { IShowPageProps } from './types/interfaces';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/swiper-bundle.min.css'; 

import './show-page.scss';
import '../../pages/HomePage/componentes/HomeServicesComponent/home-services-component.scss'
import { NavBarComponent } from '../../components/NavBarComponent/navbar-component';
import { FooterComponent } from '../../components/FooterComponent/footer-component';

export const ShowPage: React.FC<IShowPageProps> = ({}: IShowPageProps): JSX.Element => {
  /* PARALLAX EFFECT */
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const parallaxImg = useRef<HTMLDivElement>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty('--progress', String(1 - progress));

    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  useEffect(() => {
    const handleScroll = () => {
      if (parallaxImg.current) {
        const scrollY = window.scrollY;
        const threshold = 279; // Posição da rolagem para iniciar o efeito
        const estaDescendo = prevScrollY < scrollY;
        
        // Determine a direção do scroll
        const isScrollingDown = scrollY > prevScrollY;
        //console.log('Scroll Y:', scrollY, 'Previous Scroll Y:', prevScrollY, 'Scrolling Down:', isScrollingDown);

        if (scrollY > threshold) {
          // Ajuste o valor para modificar o efeito de parallax
          parallaxImg.current.style.transform = `translateY(${(scrollY - threshold) * 0.5}px)`;
        } else {
          // Reseta a transformação se a rolagem estiver acima do limite
          parallaxImg.current.style.transform = 'translateY(0px)';
        }

        // Atualiza a posição de rolagem anterior
        setPrevScrollY(scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return <Box className='showpage'>
    <NavBarComponent />

    <Box className='showpage-content'>
      
      <Box className='showpage-banner'>
        <Box className='banner-content'>
          <div className='banner-content-item' id='logo-container'> 
            <img src={srcLogo} id='logo'/> 
          </div>

          <div className='banner-content-item' id='text-container'> 
            <h2 id='text'> Paramazon - Som ao Vivo & <br/> Descricao Descricao Descricao </h2> 
          </div>

          <div className='banner-content-item'>
            <div id='button-container'>
              <Button id='button' className='btn-viewDemo'>VIEW DEMOS</Button>
              <Button id='button' sx={{color: 'black'}} className='btn-two'>PURCHASE NOW</Button>
            </div>
          </div>
        </Box>
      </Box>

      <Box className='events'>
        <EventCard />
        <EventCard />
        <EventCard />
      </Box>

      <FooterComponent />
    </Box>
  </Box>
}


{/* {<Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} onAutoplayTimeLeft={onAutoplayTimeLeft} className="events">
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
        <SwiperSlide> <EventCard /> </SwiperSlide>
      </Swiper>} */}
