import { Box } from '@mui/material';
import { SectionTitle } from '../HomeSectionTitle/home-section-title';
import { Section } from '../HomeSection/home-section';
import { IHomeLocaleProps } from '../../types/interfaces';

import './home-locale-component.css';

export const HomeLocaleComponent: React.FC<IHomeLocaleProps> = ({}: IHomeLocaleProps): JSX.Element => {
    return (
        <Section
            content={(
                <>
                    <SectionTitle
                        title='Localização'
                        subtitle='Onde nós estamos?'
                        desc='Aqui é só você, a galera e aquela resenha no estilo mais desenrolado que você já viu.'
                    />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7968.416736759924!2d-59.929871!3d-3.038726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1c06286089d9%3A0x3c4c80c69709385!2sBoteco%20Paramazon!5e0!3m2!1spt-BR!2sbr!4v1723672758225!5m2!1spt-BR!2sbr"
                        width="100%"
                        allowFullScreen
                        loading="lazy"
                        id='map'
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </>
            )}
        />
    );
}
