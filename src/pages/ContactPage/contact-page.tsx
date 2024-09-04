import React from 'react';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import { FaleConoscoComponent } from './components/FaleConoscoComponent/fale-conosco-component';
import { IContactPageProps } from './types/interface';

import './contact-page.css';

export const ContactPage: React.FC<IContactPageProps> = ({ }: IContactPageProps) => {
  return (
    <>
      <NavBarComponent />
      < div className='contact-page-bg'/>
      <main className='contact'>
        
        <div className='contact-container'>
          <FaleConoscoComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}