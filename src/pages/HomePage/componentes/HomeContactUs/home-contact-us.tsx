import React from 'react';
import './home-contact-us.css';
import Flickity from 'react-flickity-component';

const HomeContactUs = () => {
    const flickityOptions = {
        imagesLoaded: true,
        pageDots: true,
        prevNextButtons: true,
    };

    return (
        <div className='home-contact-us'>
            <h2 className='home-contact-us-title'> Servicos </h2>

            <div className='home-contact-us-container'>
            <Flickity className={'carousel home-contact-us-container'} options={flickityOptions}>
                
                    <div className='carousel home-contact-us-card'>
                        <div className='home-contact-us-card-img'>img</div>
                    </div>

                    <div className='carousel home-contact-us-card'>
                        <div className='home-contact-us-card-img'>img</div>
                    </div>

                    <div className='carousel home-contact-us-card'>
                        <div className='home-contact-us-card-img'>img</div>
                    </div>

                    <div className='carousel home-contact-us-card'>
                        <div className='home-contact-us-card-img'>img</div>
                    </div>
                </Flickity>
            </div>
        </div>
    );
};

export default HomeContactUs;