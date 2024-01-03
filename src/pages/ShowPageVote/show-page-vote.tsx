import React, { useEffect, useState } from 'react';
import './show-page-vote.css';
import ShowPageDashboardComponent from './components/ShowPageDashboardComponent/show-page-dashboard-component';
import FooterComponent from '../../components/FooterComponent/footer-component';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';
import PresentationService from '../../services/api/webServices/PresentationService';
import { PresentationVoteResponse } from '../../services/infrastructure/response/show/ShowVoteResponse';

const service = new PresentationService();

const ShowPageVote = () => {
  /* CARREGAMENTO DE DADOS*/
  const [presentationVotes, setPresentationVotes] = useState<PresentationVoteResponse[]>([]);

  useEffect(() => {
    service.getAllPresentationVotes().then(data => {
      const response = data.data.data;
      setPresentationVotes(response);
    });
  }, []);

  /* PAGINACAO */
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 3;

  const previous = () => {
    let indice = paginaAtual - 1;
    setPaginaAtual(indice);
    console.log(`PREVIOUS: ${paginaAtual}`);
  };

  const next = () => {
    let indice = paginaAtual + 1;
    setPaginaAtual(indice);
    console.log(`NEXT: ${paginaAtual}`);
  };

  // Calcular índices de início e fim com base na página atual
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = paginaAtual * itensPorPagina;

  // Gerar botões de página numerados
  const totalPaginas = Math.ceil(presentationVotes.length / itensPorPagina);

  const renderizarBotoesPagina = () => {
    const botoesPagina = [];
    for (let i = 1; i <= totalPaginas; i++) {
      botoesPagina.push(
        <li key={i} className={`page-item show-page-pagination-list-item ${i === paginaAtual ? 'active' : ''}`} onClick={() => setPaginaAtual(i)}>
          <a className="page-link show-page-pagination-list-link" href="#">{i}</a>
        </li>
      );
    }
    return botoesPagina;
  };

  // Função que verifica se pode ir para a página anterior
  const podeIrParaAnterior = () => paginaAtual > 1;

  // Função que verifica se pode ir para a próxima página
  const podeIrParaProxima = () => paginaAtual < totalPaginas;


  return (
    <>
      <NavBarComponent />

      <main className='show-page-vote'>

        <div className='show-page-vote-container'>
          <h2 className='show-page-vote-title'>Show ao vivo [empresa]: vote para ficar.</h2>


          <div className='show-page-vote-candidates-container'>
            {presentationVotes.slice(indiceInicio, indiceFim).map((presentationCandidate) => (
              <div key={presentationCandidate.idPresentationVote} className='show-page-vote-candidates-candidate-card'>
                <div className='show-page-vote-candidates-candidate-card-title'>
                  <div className='show-page-vote-candidates-candidate-card-name'>{presentationCandidate.votingPresentation.band.name}</div>
                  <div className='show-page-vote-candidates-candidate-card-votes'>VOTOS: <span>{presentationCandidate.votes}</span></div>
                </div>
                <div className='show-page-vote-candidates-candidate-card-img' />
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation example" className='show-page-pagination-container'>
            <ul className="pagination show-page-pagination-list">
              <li className="page-item show-page-pagination-list-item" onClick={podeIrParaAnterior() ? previous : undefined}>
                <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-previous" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {renderizarBotoesPagina()}
              <li className="page-item show-page-pagination-list-item" onClick={podeIrParaProxima() ? next : undefined}>
                <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-next" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

          <ShowPageDashboardComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}


export default ShowPageVote;