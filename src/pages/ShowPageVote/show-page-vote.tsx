import React from 'react';
import './show-page-vote.css';
import ShowPageDashboardComponent from './components/ShowPageDashboardComponent/show-page-dashboard-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';

const ShowPageVote = () => {
  return (
    <>
      <NavBarComponent />

      <main className='show-page-vote'>

        <div className='show-page-vote-container'>
          <h2 className='show-page-vote-title'>Show ao vivo [empresa]: vote para ficar.</h2>


          <div className='show-page-vote-candidates-container'>


            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-card-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-card-img' />
            </div>

            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-card-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-card-img' />
            </div>

            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-card-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-card-img' />
            </div>


          </div>

          <nav aria-label="Page navigation example" className='show-page-pagination-container'>
            <ul className="pagination show-page-pagination-list">

              <li className="page-item show-page-pagination-list-item">
                <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-previous" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              <li className="page-item show-page-pagination-list-item"><a className="page-link show-page-pagination-list-link" href="#">1</a></li>
              <li className="page-item show-page-pagination-list-item"><a className="page-link show-page-pagination-list-link" href="#">2</a></li>
              <li className="page-item show-page-pagination-list-item"><a className="page-link show-page-pagination-list-link" href="#">3</a></li>

              <li className="page-item show-page-pagination-list-item">
                <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-next" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>

            </ul>
          </nav>
        </div>
        <ShowPageDashboardComponent />
        <FooterComponent />
      </main>
    </>
  );
}


export default ShowPageVote;