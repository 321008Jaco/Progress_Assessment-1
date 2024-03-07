import React from "react";
import Chart from "chart.js/auto";
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
    return (
        <div>
            <Pie
                data={{
                    labels: ['Manchester City', 'Manchester United'],
                    datasets: [
                        {
                            label: 'Recent Match Man C vs Man U Ball Possession',
                            data: ['73', '27'],
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

export default PieChart;