import React from 'react';
import './contact-page.css';
import FaleConoscoComponent from './components/FaleConoscoComponent/fale-conosco-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';

function ContactPage() {
  return (
    <>
      <NavBarComponent />
      < div className='contact-page-bg'/>
      <main className='contact'>
        
        <div className='contact-container'>
          <FaleConoscoComponent />
        </div>
      </main>
    </>
  );
}

export default ContactPage;