import { IHomeCardLinkProps } from '../../../../types/interfaces';
import { Link } from 'react-router-dom';

import './home-card-link-component.css'

const HomeCardLinkComponent: React.FC<IHomeCardLinkProps> = ({ url, title = "", description, icon }: IHomeCardLinkProps): JSX.Element => {

    return (
        <div className='home-card-link-component'>
            <div className='home-card-link-component-text-container'>
                <h2 className='home-card-link-component-text-title'>{ title }</h2>
            </div>

            <Link to={url} className='home-card-link-component-link-container'>
                <div className='home-card-link-component-link-image-container'>
                    <div className='home-card-link-component-link-image-container'>
                        <div className='home-card-link-component-link-image-bg' />
                        { icon }
                    </div>

                    <span className='home-card-link-component-link-text-title animate__animated'>{ description }</span>
                </div>

                <svg className='home-card-link-component-link-icon-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
                    <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
                </svg>
            </Link>
        </div>
    );
};

export default HomeCardLinkComponent;