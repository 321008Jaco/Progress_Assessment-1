import React from "react";
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2'

const LineChart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['2014', '2015', '2016' , '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [
                        {
                            label: 'Cups Won',
                            data: ['2', '1', '1' ,'1', '4', '4', '3', '3', '3', '3'],
                            backgroundColor: 'LightBlue',
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

export default LineChart;