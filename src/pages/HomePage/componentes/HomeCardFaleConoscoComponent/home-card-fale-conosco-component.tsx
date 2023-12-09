import React, { useEffect, useState } from 'react';
import './home-card-fale-conosco-component.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomeCardFaleConoscoComponent() {

    return (
        <div className='home-card-fale-conosco-component'>
            <div className='home-card-fale-conosco-component-text-container'>
                <h2 className='home-card-fale-conosco-component-text-title'>Precisando falar conosco?</h2>
            </div>

            <Link to={'/contato'} className='home-card-fale-conosco-component-link-container animate__animated animate__fadeInLeft'>
                <div className='home-card-fale-conosco-component-link-image-container'>
                    <div className='home-card-fale-conosco-component-link-image-container'>
                        <div className='home-card-fale-conosco-component-link-image-bg' />
                        <i className="bi bi-chat-left-dots home-card-fale-conosco-component-link-image-chat-left-dots-icon"></i>
                    </div>

                    <span className='home-card-fale-conosco-component-link-text-title animate__animated'>Entrar em contato com [empresa]</span>
                </div>

                <svg className='home-card-fale-conosco-component-link-icon-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
                    <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
                </svg>
            </Link>
        </div>
    );
}

export default HomeCardFaleConoscoComponent;