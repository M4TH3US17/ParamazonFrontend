import React from 'react';
import './home-voting.css';
import { Link } from 'react-router-dom';

const HomeVoting = () => {
  return (
    <div className='home-voting'>
      <h2 className='home-voting-title'>Que tal escolher o show da próxima semana?</h2>

      {/*<div className='home-voting-img-container'>
        <div className='home-voting-img'/>
  </div>*/}

      <Link to={'/shows/selecao'} className=' btn-outline-primary home-voting-btn-vote animate__animated animate__fadeInLeft'>
        <div className='home-voting-link-container'>
          <div className='home-voting-image'>
            <div className='home-voting-link-bg' />
            <i className="bi bi-envelope"></i>
          </div>

          <span className='home-voting-link-text'>Realizar minha votação</span>
        </div>

        <svg className='home-voting-link-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
          <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
        </svg>
      </Link>
    </div>
  );
}

export default HomeVoting;