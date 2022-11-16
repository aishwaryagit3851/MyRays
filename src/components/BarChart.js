import React from 'react';
import {Bar} from 'react-chartjs-2';
//import {Chart as ChartJS} from 'chart.js/auto';
const Barchart = ({chartData}) => {
   
  return (
  <>
<Bar height={120} data={chartData}/>

  </>
  )
}
export default Barchart 