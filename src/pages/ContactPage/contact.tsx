import React from 'react';
import './contact.css';
import NavBar from '../../components/NavBar/navbar';
import FaleConoscoComponent from './FaleConoscoComponent/fale-conosco';

function ContactPage() {
  return (
    <>
      <NavBar />
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