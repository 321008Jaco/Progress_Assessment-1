import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BarChart from '../components/ChartOne';
import PieChart from '../components/ChartTwo';
import LineChart from '../components/ChartThree';
import DoughnutChart from '../components/ChartFour';
import './Charts.css';
import RadarChart from '../components/ChartFive';

function Charts() {
  return (

    <>

    <h3 className='ChartOne'>This Is How many Matches Man City Has Won Over 9 Years</h3>
    
    <div className='BarChart'>
        <BarChart/>
    </div>

    <h3 className='ChartTwo'>This Is The Ball Possession between Manchester City And Manchester United's Most Recent Match</h3>

    <div className='PieChart'>
        <PieChart/>
    </div>

    <h3 className='ChartThree'>This Is How many Cups Man City Has Won Over 9 Years</h3>

    <div className='LineChart'>
        <LineChart/>
    </div>

    <h3 className='ChartFour'>This Is How many Goals Was Scored This Season</h3>

    <div className='DoughnutChart'>
        <DoughnutChart/>
    </div>

    <h3 className='ChartFive'>This Is Manchester City's Goalie Stats</h3>

    <div className='RadarChart'>
        <RadarChart/>
    </div>
    
    </>

  );
}

export default Charts;
