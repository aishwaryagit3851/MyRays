import React,{useState} from 'react';

import BarChart from './BarChart';
import {UserData} from './Data';
const Dashboard = () => {
   const [userData,setUserData]=useState({
    labels:  UserData.map((data)=>data.name),
    datasets:[{
      label:"TOTAL BOOK PUBLISHED",
      data:UserData.map((data)=>data.inr),
      backgroundColor:"skyblue",
      barThickness:50
      }]
   }); 
   const [options,setOptions]=useState({
    maintainAspectRation:false,
    scales: {
      y: {
        title: {
          display: true,
          text:"INR"
        }
      }
    }
   })
  return (
  <>

  <div className="dashboard">
   <div className="d-flex">
    <div className="dash-item p-3"><h6 style={{lineHeight:2}}>TODAY'S BOOK PUBLISHED 10</h6></div>
    <div className="dash-item p-3"><h6 style={{lineHeight:2}}>TODAY'S ENQUIRY GENERATED 10</h6></div>
    <div className="dash-item p-3"><h6 style={{lineHeight:2}}>NO OF BOOKS ADDED 10</h6></div>
   </div>
   <div className="chart">
   <BarChart chartData={userData} options={options}/>
  </div>
  </div>
  </>
  )
}
export default Dashboard