import axios from 'axios';
import { useState } from 'react';

function useChartData() {

  const [chartData, setChartData] = useState([]);

  const getChartData = async () => {
    const data = await axios.get('http://localhost:5000/smadata');
    setChartData(data);
  }

  return { chartData, getChartData }
}

export default useChartData;