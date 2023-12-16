import React from 'react';
import './fale-conosco-component.css';

function FaleConoscoComponent() {
  return (
    <>
      <div className='fale-conosco-component'>
        <div className='fale-conosco-component-text-container'>
          <h2 className='fale-conosco-component-text-title'>Fale Conosco</h2>
        </div>

        <form className='fale-conosco-component-form-container'>

          <div className='fale-conosco-component-form-double-inputs'>
            <div className='fale-conosco-component-form-item'>
              <label htmlFor="" className='fale-conosco-form-label fale-conosco-component-form-label'><strong>Qual seu nome?</strong></label>

              <div className='fale-conosco-component-form-item-icon-container'>
                <input className="form-control fale-conosco-component-form-input" type='text' placeholder='Digite seu nome' required maxLength={35} />
                <i className="bi bi-person-fill person-icon"></i>
              </div>
            </div>

            <div className='fale-conosco-component-form-item'>
              <label htmlFor="" className='fale-conosco-form-label fale-conosco-component-form-label'><strong>Qual seu telefone?</strong></label>

              <div className='fale-conosco-component-form-item-icon-container'>
                <input className="form-control fale-conosco-component-form-input" placeholder='Digite seu numero' type='text' required maxLength={20} />
                <i className="bi bi-telephone-fill phone-icon"></i>
              </div>
            </div>
          </div>

          <div className='fale-conosco-component-form-item'>
            <label htmlFor="" className='fale-conosco-component-form-label'><strong>Qual seu email?</strong></label>

            <div className='fale-conosco-component-form-item-icon-container'>
              <input className="form-control fale-conosco-component-form-input form-control fale-conosco-component-form-input-email" placeholder='Digite seu email' type='email' required maxLength={40} />
              <i className="bi bi-envelope-at-fill envelope-icon"></i>
            </div>
          </div>

          <div className='fale-conosco-component-form-item'>
            <label htmlFor="" className='fale-conosco-component-form-label'><strong>Como podemos te ajudar?</strong></label>
            <textarea className="form-control fale-conosco-component-form-textarea" maxLength={1000}></textarea>
          </div>

          <div className='fale-conosco-component-item fale-conosco-component-form-item-btn-container'>
            <button className="btn fale-conosco-component-form-btn-enviar">ENVIAR</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FaleConoscoComponent;