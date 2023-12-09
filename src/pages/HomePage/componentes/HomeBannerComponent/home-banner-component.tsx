import React, { useEffect, useContext } from 'react';
import './home-banner-component.css';
import Flickity from 'react-flickity-component';

const slides = [
    { id: 0, title: 'Extremamente profissionais, atenciosos em todos os detalhes do que pedi. Estou muito satisfeito', testimony: 'Paulo Rivelino, Diretor da AVERTEX' },
    { id: 1, title: 'A equipe da BYG foi muito atenciosa comigo, sanaram todas as minhas duvidas e me deixaram muito confortavel para seguirmos com o projeto. Estou extremamente satisfeita!', testimony: 'Cláudia Valle, CEO do Alquimia do Cheff' },
    { id: 2, title: 'O serviço aplicado atendeu o que estava proposto assim como a equipe se dedicou e buscou ser o mais solicito possivel para resolver eventualidades e também repasse de como manipular  o software, dando total suporte na troca de conhecimento.', testimony: 'Junior Gemaque, Ex-Engenheiro Florestal da Unifloresta' }
];

const HomeBannerComponent = () => {
    const flickityOptions = {
        imagesLoaded: true,
        pageDots: true,
        prevNextButtons: true,
    };

    return (
        <>
            <Flickity className={'carousel'} options={flickityOptions}>
                <div className="carousel c1">
                </div>

                <div className="carousel c2">
                </div>

                <div className="carousel c3">
                </div>
            </Flickity>
        </>
    );
};

export default HomeBannerComponent;