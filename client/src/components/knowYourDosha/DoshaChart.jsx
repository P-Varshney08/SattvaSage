import React from 'react';
import Chart from 'react-apexcharts';

const KnowYourDosha = ({data}) => {
  const chartData = data;

  const chartOptions = {
    chart: {
      type: 'bar',
      background: '#454545',
    },
    theme: {
      mode: 'dark',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        distributed: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 1,
              color: '#0015FF', 
            },
            {
              from: 1,
              to: 2,
              color: '#32CD32', 
            },
            {
              from: 2,
              to: 3,
              color: '#6D1EFF', 
            },
          ],
        },
      },
    },
    xaxis: {
      categories: ['Vata', 'Kapha', 'Pitta'],
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Chart
        options={chartOptions}
        series={[{ data: chartData }]}
        type="bar"
        width={500}
      />
    </div>
  );
};

export default KnowYourDosha;