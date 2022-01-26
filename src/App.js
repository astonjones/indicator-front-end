import './App.css';
import ChartComponent from './ChartComponent';
import React, { useState, useEffect } from 'react';
import useChartData from './useChartData';

function App() {

  const { chartData, getChartData } = useChartData();

  useEffect(async () => await getChartData(), []);

  console.log(chartData.data)

  return (
    <div className="App">
      <h1> This is my App</h1>
      <ChartComponent chartData={chartData} />
    </div>
  )
}

export default App;
