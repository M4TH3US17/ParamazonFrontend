import React from 'react';
import './footer-component.css';

function FooterComponent() {
  return (
    <div className='footer'>
      <div className='footer-container'>

        <div className='footer-container-nav'>
          <div className='footer-container-nav-item'>
            <a href="#" className='nav-link'>Sobre</a>
            <a href="#" className='nav-link'>Suporte</a>
          </div>

          <div className='footer-container-nav-item'>
            <div className='flag-brazil'/>
          </div>
        </div>
        <hr />
        <div className='footer-container-links'>

          <a href='https://www.instagram.com/boteco_paramazon/' className='footer-container-link-item' target='_blank'>
            <div className='footer-container-link-item-destaque'><i className="bi bi-instagram"></i> <span className='link-text'>INSTAGRAM</span></div>
          </a>

          <div>
            <a href='https://www.facebook.com/botecoparamazon' className='footer-container-link-item' target='_blank'>
              <div className='footer-container-link-item-subitem'><i className="bi bi-facebook"></i> <span className='link-text'>FACEBOOK</span></div>
            </a>

            <a href='#' className='footer-container-link-item' style={{ marginLeft: '5px' }}>
              <div className='footer-container-link-item-subitem'><i className="bi bi-whatsapp"></i> <span className='link-text'>WHATSAPP</span></div>
            </a>
          </div>
        </div>

        <hr />

        <div className='footer-container-credits'>
          <p className='footer-container-credits-item'>[empresa] - CNPJ 00.000.000/0000-00</p>
          <p className='footer-container-credits-item'>Av. xxxxxxx, 02 - Jorge Teixeira, Manaus - AM, 00000-000</p>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;