import React from "react";
import Chart from "chart.js/auto";
import {Radar} from 'react-chartjs-2'

const RadarChart = () => {
    return (
    
    <div>
        <Radar
            data={{
                labels: ['Saves', 'Penalty Saves', 'Catches', 'Own Goals', 'Assists', 'Punches', 'Errors Leading To Goal'],
                datasets: [
                    {
                        label: 'Matches Won',
                        data: ['403', '3', '24' ,'0', '3', '60', '7'],
                        backgroundColor: 'LightBlue',
                    }
                ]
            }}
            height={400}
            width={400}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            }}
        />
        </div>
    );
};

export default RadarChart;