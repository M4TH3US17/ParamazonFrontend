import React from 'react';
import { FaleConoscoComponent } from './components/FaleConoscoComponent/fale-conosco-component';
import { IContactPageProps } from './types/interface';

import { FooterComponent } from '../../components/FooterComponent/footer-component';
import { NavBarComponent } from '../../components/NavBarComponent/navbar-component';

import './contact-page.scss';

export const ContactPage: React.FC<IContactPageProps> = ({ }: IContactPageProps): JSX.Element => {
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