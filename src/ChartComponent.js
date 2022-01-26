import { Line } from 'react-chartjs-2';
import React from 'react';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

function ChartComponent({ chartData }) {

  const data = {
    labels: [],
    datasets: chartData.data === undefined ? []
    :
    chartData.data.closingPrices.map((prices) => (
      {
        label: 'Dataset 1',
        data: prices,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ))
  };

  return(
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default ChartComponent;