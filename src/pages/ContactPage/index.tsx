import React from 'react';
import { IContactPageProps } from './types/interface';
import { FaleConoscoComponent } from './blocks/FaleConoscoComponent';
import { FooterComponent } from '../../components/FooterComponent';
import { NavBarComponent } from '../../components/NavBarComponent';

import './index.scss';

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