import React from 'react';
import './home-voting.css';
import { Link } from 'react-router-dom';

const HomeVoting = () => {
  return ( 
  <div className='home-voting'>
    <h2 className='home-voting-title animate__animated animate__fadeInDown'>Que tal escolher o show da proxima semana?</h2>

    <div className='home-voting-img-container'>
        <div className='home-voting-img'/>
    </div>

    <Link to={'/shows/selecao'} className='btn home-voting-btn-vote'>
        <span>Realizar Votação</span>
    </Link>
  </div>
  );
}

export default HomeVoting;