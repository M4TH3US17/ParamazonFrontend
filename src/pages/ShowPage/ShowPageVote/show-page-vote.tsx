import React from 'react';
import './show-page-vote.css';
import NavBar from '../../../components/NavBar/navbar';
import Footer from '../../../components/Footer/footer';

const ShowPageVoting = () => {
  return (
    <>
      <NavBar />

      <main className='show-page-vote'>

        <div className='show-page-vote-container'>
          <h2 className='show-page-vote-title'>Show ao vivo Paramazon: vote para ficar.</h2>


          <div className='show-page-vote-candidates'>


            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-img' />
            </div>

            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-img' />
            </div>

            <div className='show-page-vote-candidates-candidate-card'>
              <span className='show-page-vote-candidates-candidate-name'>Candidato</span>
              <div className='show-page-vote-candidates-candidate-img' />
            </div>


          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}


export default ShowPageVoting;