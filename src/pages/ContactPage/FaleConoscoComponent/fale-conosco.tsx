import React from 'react';
import './fale-conosco.css';
import Footer from '../../../components/Footer/footer';

function FaleConoscoComponent () {
  return (
    <div className='contact-fale-conosco'>
      <div className='contact-fale-conosco-text-container'>
        <h2 className='contact-fale-conosco-text-title'>Fale Conosco</h2>
      </div>

        <form className='contact-fale-conosco-container'>
          <div className='contact-fale-conosco-item'>
            <label htmlFor="" className='contact-fale-conosco-lbl'><strong>Qual seu nome?</strong></label>

            <div className='contact-fale-conosco-item-container-icon'>
              <input className="form-control" type='text' placeholder='Digite seu nome' required maxLength={35}/>
              <i className="bi bi-person-fill"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-item'>
            <label htmlFor="" className='contact-fale-conosco-lbl'><strong>Qual seu email?</strong></label>

            <div className='contact-fale-conosco-item-container-icon'>
              <input className="form-control" placeholder='Digite seu email' type='email' required maxLength={40}/>
              <i className="bi bi-envelope-at-fill"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-item'>
            <label htmlFor="" className='contact-fale-conosco-lbl'><strong>Qual seu telefone?</strong></label>

            <div className='contact-fale-conosco-item-container-icon'>
              <input className="form-control" placeholder='Digite seu numero' type='text' required maxLength={20}/>
              <i className="bi bi-telephone-fill"></i>
            </div>
          </div>

          <div className='contact-fale-conosco-item'>
            <label htmlFor="" className='contact-fale-conosco-lbl'><strong>Como podemos te ajudar?</strong></label>
            <textarea className="form-control" maxLength={1000}></textarea>
          </div>

          <div className='contact-fale-conosco-item contact-fale-conosco-item-btn'>
            <button className="btn btn-primary">ENVIAR</button>
          </div>
        </form>
    </div>
  );
}

export default FaleConoscoComponent;