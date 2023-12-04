import React from 'react';
import './show-page-dashboard.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ShowPageDashboard = () => {

    const data = {
        labels: ['Candidato 1', 'Candidato 2', 'Candidato 3', 'Candidato 4'],
        datasets: [
          {
            data: [30, 25, 20, 25], // valores dos dados
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // cores das fatias
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // cores do hover
          },
        ],
      };

  return (
    <div className='show-page-dashboard-component'>

        <div className='show-page-dashboard-container'>
            <div className='show-page-dashboard-text'>
                <h2 className='show-page-dashboard-text-title'>Seleção de shows da próxima semana</h2>
                <h3 className='show-page-dashboard-text-subtitle'>Em % de votos válidos</h3>
            </div>

            <div className='show-page-dashboard-graphic'>
            <Pie data={data} />;
            </div>
        </div>

    </div>
  );
}


export default ShowPageDashboard;