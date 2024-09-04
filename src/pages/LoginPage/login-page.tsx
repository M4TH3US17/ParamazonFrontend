import { Link } from 'react-router-dom';
import { ILoginPageProps } from './types/interfaces';

import './login-page.scss';

export const LoginPage: React.FC<ILoginPageProps> = ({}:ILoginPageProps): JSX.Element => {
    return (
        <main className='login-page'>
            <div className='login-page-content'>
                <div className='login-page-content-container'>

                    <div className='login-page-image'></div>


                    <form className='login-page-form'>
                        <div className='login-page-form-content'>
                            <div className='login-page-form-header login-page-form-item-container'>
                                <div className='login-page-header-item-logo' />
                            </div>

                            <div className='login-page-form-item-container'>
                                <label htmlFor="" className="login-page-form-item-label input-group-text"><strong>Usuario</strong></label>

                                <div className='login-page-form-input-container'>
                                    <input className="login-page-form-item-input form-control" placeholder='' type='text' required />
                                    <i className="bi bi-person-fill login-person-icon"></i>
                                </div>
                            </div>

                            <div className='login-page-form-item-container'>
                                <span className="login-page-form-item-label input-group-text"><strong>Senha</strong></span>

                                <div className='login-page-form-input-container'>
                                    <input className="login-page-form-item-input form-control" placeholder='' type='password' required />
                                    <i className="login-dash-circle-icon bi bi-dash-circle-fill"></i>
                                </div>
                            </div>

                            <div className='login-page-form-item-btn-container'>
                                <button className='login-page-form-btn-acessar btn btn-primary'>ACESSAR</button>
                            </div>

                            <div className='login-page-form-item-or-container d-flex'>
                                <hr className='login-page-form-item-or-line' /> <span className='login-page-form-item-or-text-title'>OU</span> <hr className='login-page-form-item-or-line' />
                            </div>

                            <div className='login-page-form-item-container login-page-form-item-link-container'>
                                <Link to={'/'} className='login-page-form-item-register-link'>Criar uma conta</Link>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </main>
    );
};