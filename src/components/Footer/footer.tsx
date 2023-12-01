import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-container-links'>
          <a href='https://www.instagram.com/boteco_paramazon/' target='_blank'><i className="bi bi-instagram"></i></a>
          <a href='https://www.facebook.com/botecoparamazon' target='_blank'><i className="bi bi-facebook"></i></a>
          <a href='#'><i className="bi bi-whatsapp"></i></a>
        </div>

        <div className='footer-container-credits'>
          <p>Matheus Washington</p>
          <i className="bi bi-dot"></i>
          <p>Sobre</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;