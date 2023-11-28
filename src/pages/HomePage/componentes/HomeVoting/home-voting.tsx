import React from 'react';
import './home-voting.css'

const HomeVoting = () => {
  return ( 
  <div className='home-voting'>
    <h2 className='home-voting-title'>Que tal escolher o show da proxima semana?</h2>

    <div className='home-voting-img-container'>
        <div className='home-voting-img'/>
    </div>

    <button className='btn home-voting-btn-vote'>
        <span>Realizar Votação</span>
    </button>
  </div>
  );
}

export default HomeVoting;