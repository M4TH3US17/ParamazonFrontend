import React from 'react';
import './fale-conosco-component.css';
import Footer from '../../../../components/FooterComponent/footer-component';

function FaleConoscoComponent() {
  return (
    <>
      <div className='contact-fale-conosco'>
        <div className='contact-fale-conosco-text-container'>
          <h2 className='contact-fale-conosco-text-title'>Fale Conosco</h2>
        </div>

        <form className='contact-fale-conosco-form-container'>
          <div className='contact-fale-conosco-form-item'>
            <label htmlFor="" className='contact-fale-conosco-form-label'><strong>Qual seu nome?</strong></label>

            <div className='contact-fale-conosco-form-item-icon-container'>
              <input className="form-control contact-fale-conosco-form-input" type='text' placeholder='Digite seu nome' required maxLength={35} />
              <i className="bi bi-person-fill person-icon"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-form-item'>
            <label htmlFor="" className='contact-fale-conosco-form-label'><strong>Qual seu email?</strong></label>

            <div className='contact-fale-conosco-form-item-icon-container'>
              <input className="form-control contact-fale-conosco-form-input" placeholder='Digite seu email' type='email' required maxLength={40} />
              <i className="bi bi-envelope-at-fill envelope-icon"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-form-item'>
            <label htmlFor="" className='contact-fale-conosco-form-label'><strong>Qual seu telefone?</strong></label>

            <div className='contact-fale-conosco-form-item-icon-container'>
              <input className="form-control contact-fale-conosco-form-input" placeholder='Digite seu numero' type='text' required maxLength={20} />
              <i className="bi bi-telephone-fill phone-icon"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-form-item'>
            <label htmlFor="" className='contact-fale-conosco-form-label'><strong>Como podemos te ajudar?</strong></label>
            <textarea className="form-control contact-fale-conosco-form-textarea" maxLength={1000}></textarea>
          </div>

          <div className='contact-fale-conosco-item contact-fale-conosco-form-item-btn-container'>
            <button className="btn contact-fale-conosco-form-btn-enviar">ENVIAR</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default FaleConoscoComponent;