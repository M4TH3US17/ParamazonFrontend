import React from 'react';
import './show-page-dashboard-component.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import randomColor from 'randomcolor';
import { Pie } from 'react-chartjs-2';
import { PresentationVoteResponse } from '../../../../services/infrastructure/response/show/ShowVoteResponse';

ChartJS.register(ArcElement, Tooltip, Legend);

/* Graph */
interface GraphData {
    labels: string[];
    datasets: [{
        data: number[];
        backgroundColor: string[];
        hoverBackgroundColor: string[];
    }];
}

/* PROPS */
interface ShowPageDashboardComponentProps {
    candidates: PresentationVoteResponse[];
    totalVotes: number;
}

const ShowPageDashboardComponent: React.FC<ShowPageDashboardComponentProps> = ({ candidates, totalVotes }) => {
    let data: GraphData = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['#031d3d', '#4e4b98', '#00a4b2', '#4CAF50'],
            hoverBackgroundColor: ['#031d3d', '#4e4b98', '#00a4b2', '#4CAF50']
        }]
    };

    for (let candidate of candidates) {
        let candidateName = candidate.votingPresentation.band.name;
        let votes = candidate.votes;

        data.labels.push(candidateName)
        data.datasets[0].data.push(votes)

        if((candidates.length > 4) && (data.datasets[0].backgroundColor.length < data.labels.length)) {
            let randomHexColor = randomColor();
            data.datasets[0].backgroundColor.push(randomHexColor)
            data.datasets[0].hoverBackgroundColor.push(randomHexColor)
        } 
    }

    return (
        <div className='show-page-dashboard-component'>

            <div className='show-page-dashboard-image-bg' />

            <div className='show-page-dashboard-container'>
                <div className='show-page-dashboard-text'>
                    <h2 className='show-page-dashboard-text-title'>Seleção de shows da próxima semana</h2>
                    <h3 className='show-page-dashboard-text-subtitle'>Em % de votos válidos</h3>
                </div>

                <div className='show-page-dashboard-graphic'>
                    <Pie data={data} className='graphic-pie' color='black' />
                </div>

                <div className='show-page-dashboard-graphic-details-container'>
                    <div className='show-page-dashboard-graphic-details-item'>
                        <span className='show-page-dashboard-graphic-details-text-votes'>votos totais:</span> {totalVotes}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShowPageDashboardComponent;