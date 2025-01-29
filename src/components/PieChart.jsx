import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, Title);


const PieChart = () => {

  const [girlsData,setGirlsData]=useState();
  const [boysData,setBoysData]=useState();


  useEffect(()=>{
    fetchGenderData();
  },[]);

  const fetchGenderData =async () =>{
    const response =  await axios.post('https://localhost:7276/api/Analytics/GetGenderData');
    if(response.status===200){
      console.log(parseInt(response.data.femaleNo, 10));
      setGirlsData(parseInt(response.data.femaleNo, 10));
      setBoysData(parseInt(response.data.maleNo, 10));
    }else{
      console.log('error');
    }

  };


  const genderData = {
    labels: ['Girls', 'Boys'],
    datasets: [
      {
        data: [girlsData, boysData],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF80A0', '#50B5F2'],
      },
    ],
  };

  const passFailData = {
    labels: ['Pass', 'Fail'],
    datasets: [
      {
        data: [400, 50],
        backgroundColor: ['#4BC0C0', '#FFCE56'],
        hoverBackgroundColor: ['#76DADA', '#FFD87F'],
      },
    ],
  };

  const graduateData = {
    labels: ['Graduates', 'Dropouts'],
    datasets: [
      {
        data: [320, 80],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#50B5F2', '#FF80A0'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  const chartStyle = {
    width: '100%',
    maxWidth: '300px',
    margin: '20px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={chartStyle}>
        <h3 style={titleStyle}>Gender Distribution</h3>
        <Pie data={genderData} options={options} />
      </div>
      <div style={chartStyle}>
        <h3 style={titleStyle}>Pass vs Fail Rate</h3>
        <Pie data={passFailData} options={options} />
      </div>
      <div style={chartStyle}>
        <h3 style={titleStyle}>Graduate vs Dropout Rate</h3>
        <Pie data={graduateData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
