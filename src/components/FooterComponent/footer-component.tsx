import React from 'react';
import './footer-component.css';

function FooterComponent() {
  return (
    <div className='footer-component'>
      <div className='footer-component-content'>

        <div className='footer-component-navigation-container'>
          <div className='footer-component-navigation-container-item'>
            <a href="#" className='footer-navigation-link'>Sobre</a>
            <a href="#" className='footer-navigation-link'>Suporte</a>
          </div>

          <div className='footer-component-navigation-container-item'>
            <div className='footer-image-flag-brazil' />
          </div>
        </div>

        <hr className='footer-line' />

        <div className='footer-component-link-container'>
          <div className='footer-component-link-content'>
            <a href='https://www.instagram.com/boteco_paramazon/' className='footer-component-link-item footer-component-link-item-instagram' target='_blank'>
              <div className='footer-component-link-item-content-principal'>
                <i className="bi bi-instagram footer-instagram-icon"></i>
                <span className='footer-component-link-item-content-principal-text'>INSTAGRAM</span>
              </div>
            </a>

            <div className='footer-component-link-subcontainer'>
              <a href='https://www.facebook.com/botecoparamazon' className='footer-component-link-item footer-component-link-item-facebook' target='_blank'>
                <div className='footer-component-link-item-content'>
                  <i className="bi bi-facebook footer-facebook-icon"></i>
                  <span className='footer-component-link-item-content-principal-text'>FACEBOOK</span>
                </div>
              </a>

              <a href='#' className='footer-component-link-item footer-component-link-item-whatsapp'>
                <div className='footer-component-link-item-content'>
                  <i className="bi bi-whatsapp footer-whatsapp-icon"></i>
                  <span className='footer-component-link-item-content-text'>WHATSAPP</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr className='footer-line' />

        <div className='footer-component-credits-container'>
          <div className='footer-component-credits-content'>

            <div className='footer-component-credits-content-item'>
              <div className='footer-credits-content-logo'/>
              <h3 className='footer-credits-content-logo-title'>Paramazon</h3>
            </div>

            <div className='footer-component-credits-content-item'>
              <p className='footer-component-credits-item'>Paramazon - CNPJ 00.000.000/0000-00</p>
              <p className='footer-component-credits-item'>Av. Tambaqui, 02 - Jorge Teixeira, Manaus - AM, 00000-000</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;