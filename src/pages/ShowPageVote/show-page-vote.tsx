import React, { useEffect, useState } from 'react';
import './show-page-vote.css';
import { PresentationVoteResponse, ShowVoteResponse } from '../../services/infrastructure/response/show/ShowVoteResponse';
import ShowService from '../../services/api/webServices/ShowService';
import { Box, Paper, Typography } from '@mui/material';
import { NavBarComponent } from '../../components/NavBarComponent/navbar-component';

//const service = new PresentationService();
const service = new ShowService();

const ShowPageVote: React.FC<{}> = ({}:{}): JSX.Element => {
  /* CARREGAMENTO DE DADOS*/
  const [showVote, setShowVote] = useState<ShowVoteResponse>(new ShowVoteResponse());
  const [presentationVotes, setPresentationVotes] = useState<PresentationVoteResponse[]>([]);

  useEffect(() => {
    service.getAllShowVotes().then(data => {
      const response = data.data.data;

      setShowVote(response[1]);
      setPresentationVotes(response[1].presentationVoteList);
    });
  }, []);

  /* PAGINACAO */
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 3;

  const previous = () => {
    let indice = paginaAtual - 1;
    setPaginaAtual(indice);
    //console.log(`PREVIOUS: ${paginaAtual}`);
  };

  const next = () => {
    let indice = paginaAtual + 1;
    setPaginaAtual(indice);
    //console.log(`NEXT: ${paginaAtual}`);
  };

  // Calcular índices de início e fim com base na página atual
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = paginaAtual * itensPorPagina;

  // Gerar botões de página numerados
  let totalPaginas = Math.ceil(presentationVotes.length / itensPorPagina);

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

      <Box className='showpage-content' sx={{marginTop: '25px'}}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            🚧 Página em Desenvolvimento 🚧
          </Typography>
          <Typography variant="body1">
            Esta página está atualmente em desenvolvimento. Por favor, volte mais tarde. (20/08/24)
          </Typography>
        </Paper>
      </Box>
    </>
    // {<>
    //   <NavBarComponent />

    //   <main className='show-page-vote'>

    //     <div className='show-page-vote-container'>
    //       <div className='show-page-vote-text'>
    //         <h2 className='show-page-vote-title'>Show ao vivo [empresa]: vote para ficar.</h2>

    //         <div className='show-page-vote-text-dates'>
    //           <div className='date-start-vote'><span className='date-text'>INICIO:</span> {new Date(showVote.startVoting).toLocaleDateString()}</div>
    //           <div className='date-end-vote'><span className='date-text'>FIM:</span> {new Date(showVote.endVoting).toLocaleDateString()}</div>
    //         </div>
    //       </div>


    //       <div className='show-page-vote-candidates-container'>
    //         {presentationVotes && Array.isArray(presentationVotes) ? (
    //           presentationVotes.slice(indiceInicio, indiceFim).map((presentationCandidate) => (
    //             <div key={presentationCandidate.idPresentationVote} className='show-page-vote-candidates-candidate-card'>
    //               <div className='show-page-vote-candidates-candidate-card-title'>
    //                 <div className='show-page-vote-candidates-candidate-card-name'>{presentationCandidate.votingPresentation.band.name}</div>
    //                 <div className='show-page-vote-candidates-candidate-card-votes'>VOTOS: <span>{presentationCandidate.votes}</span></div>
    //               </div>
    //               <div className='show-page-vote-candidates-candidate-card-img' />
    //             </div>
    //           ))
    //         ) : (
    //           <p>Nenhum dado disponível</p>
    //         )}
    //       </div>

    //       <nav aria-label="Page navigation example" className='show-page-pagination-container'>
    //         <ul className="pagination show-page-pagination-list">
    //           <li className="page-item show-page-pagination-list-item" onClick={podeIrParaAnterior() ? previous : undefined}>
    //             <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-previous" href="#" aria-label="Previous">
    //               <span aria-hidden="true">&laquo;</span>
    //             </a>
    //           </li>
    //           {renderizarBotoesPagina()}
    //           <li className="page-item show-page-pagination-list-item" onClick={podeIrParaProxima() ? next : undefined}>
    //             <a className="page-link show-page-pagination-list-link show-page-pagination-list-btn-next" href="#" aria-label="Next">
    //               <span aria-hidden="true">&raquo;</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>

    //       <ShowPageDashboardComponent 
    //       candidates={presentationVotes} 
    //       totalVotes={showVote.totalVotes == undefined ? 0 : showVote.totalVotes}
    //       />
    //     </div>
    //   </main>
    //   <FooterComponent />
    // </>}
  );
}


export default ShowPageVote;