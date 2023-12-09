import React from 'react';
import './home-card-voting-component.css';
import { Link } from 'react-router-dom';

const HomeCardVotingComponent = () => {
  return (
    <div className='home-card-voting-component'>
      <h2 className='home-card-voting-component-title'>Que tal escolher o show da próxima semana?</h2>

      <Link to={'/shows/selecao'} className='home-card-voting-component-link animate__animated animate__fadeInLeft'>

        <div className='home-card-voting-component-link-container'>
          <div className='home-card-voting-component-link-image-container'>
            <div className='home-card-voting-component-link-image-bg' />
            <i className="bi bi-envelope home-card-voting-component-link-image-envelope-icon"></i>
          </div>

          <span className='home-card-voting-component-link-title'>Realizar minha votação</span>
        </div>

        <svg className='home-card-voting-component-link-arrow-icon' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
          <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
        </svg>
      </Link>

    </div>
  );
}

export default HomeCardVotingComponent;