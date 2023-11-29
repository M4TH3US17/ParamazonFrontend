import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
    return (
        <main className='login-page'>

            <form className='login-page-form'>
                <div className='login-page-form-item login-page-form-item-header'>
                    <div className='login-page-form-item-logo'/>
                </div>

                <div className='login-page-form-item'>
                    <label htmlFor="" className="input-group-text"><strong>Usuario</strong></label>

                    <div className='login-page-form-input-container'>
                        <input className="form-control" placeholder='' type='text' required/>
                        <i className="bi bi-person-fill"></i>
                    </div>
                </div>

                <div className='login-page-form-item'>
                    <span className="input-group-text"><strong>Senha</strong></span>

                    <div className='login-page-form-input-container'>
                        <input className="form-control" placeholder='' type='password' required/>
                        <i className="bi bi-dash-circle-fill"></i>
                    </div>
                </div>

                <div className='login-page-form-item-btn'>
                    <button className='login-page-form-btn btn btn-primary'>ACESSAR</button>
                </div>

                <div className='login-page-form-item-cadastro-title d-flex '>
                    <hr/> <span>OU</span> <hr/>
                </div>

                <div className='login-page-form-item'>
                    <Link to={''} className='login-page-form-item-create-account-link'>Criar uma conta</Link>
                </div>
            </form>

        </main>
    );
}

export default LoginPage;