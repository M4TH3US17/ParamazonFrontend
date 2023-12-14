import './home-card-link-component.css'
import { Link } from 'react-router-dom';

interface HomeCardLinkProps {
    url: string;
    title: string;
    linkDescription: string;
    tagIcone: React.ReactNode;

    style?: React.CSSProperties;
}

//animate__animated animate__fadeInLeft

const HomeCardLinkComponent: React.FC<HomeCardLinkProps> = ({ url, title, linkDescription, tagIcone }) => {

    return (
        <div className='home-card-link-component'>
            <div className='home-card-link-component-text-container'>
                <h2 className='home-card-link-component-text-title'>{ title }</h2>
            </div>

            <Link to={url} className='home-card-link-component-link-container'>
                <div className='home-card-link-component-link-image-container'>
                    <div className='home-card-link-component-link-image-container'>
                        <div className='home-card-link-component-link-image-bg' />
                        { tagIcone }
                    </div>

                    <span className='home-card-link-component-link-text-title animate__animated'>{ linkDescription }</span>
                </div>

                <svg className='home-card-link-component-link-icon-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32">
                    <path d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z" fill="currentColor"></path>
                </svg>
            </Link>
        </div>
    );
};

export default HomeCardLinkComponent;