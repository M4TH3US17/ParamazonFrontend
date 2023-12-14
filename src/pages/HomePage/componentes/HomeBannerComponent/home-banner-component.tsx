import React from 'react';
import './home-banner-component.css';
import Flickity from 'react-flickity-component';

const HomeBannerComponent = () => {
    const flickityOptions = {
        imagesLoaded: true,
        pageDots: true,
        prevNextButtons: true,
    };

    return (
        <Flickity className={'carousel'} options={flickityOptions}>
            <div className="carousel c1">
            </div>

            <div className="carousel c2">
            </div>

            <div className="carousel c3">
            </div>
        </Flickity>
    );
};

export default HomeBannerComponent;