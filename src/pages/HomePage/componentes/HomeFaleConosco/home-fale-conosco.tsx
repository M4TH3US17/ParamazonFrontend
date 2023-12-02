import React, { useEffect, useState } from 'react';
import './home-fale-conosco.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomeFaleConosco() {

    return (
        <div className='home-fale-conosco'>
            <div className='home-fale-conosco-text'>
                <h2 className='home-fale-conosco-text-title'>Precisando falar conosco?</h2>
            </div>

            <Link to={'/contato'} className='home-fale-conosco-link animate__animated animate__fadeInLeft'>
                <div className='home-fale-conosco-link-container'>
                    <div className='home-fale-conosco-image'>
                        <div className='home-fale-conosco-link-bg' />
                        <i className="bi bi-chat-left-dots"></i>
                    </div>

                    <span className='home-fale-conosco-link-text animate__animated'>Entrar em contato com [empresa]</span>
                </div>

                <svg className='home-fale-conosco-link-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
                    <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
                </svg>
            </Link>
        </div>
    );
}

export default HomeFaleConosco;