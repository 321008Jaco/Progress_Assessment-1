import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = () => {
    return (
        <div>
        <Doughnut
            data={{
                labels: ['Manchester City', 'Manchester United'],
                datasets: [
                    {
                        label: 'Matches Won',
                        data: ['63', '36'],
                        backgroundColor: ['LightBlue', 'Red'],
                        borderColor: 'black',
                        borderWidth: 1,
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

export default DoughnutChart;