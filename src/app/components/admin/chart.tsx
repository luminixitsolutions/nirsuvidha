// LineChart.jsx
// @ts-nocheck 
'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false})

export default function ChartBox() {
 const series = [
    {
      name: "Product A",
      data: [10, 41, 35, 51, 49, 62, 69],
    },
    {
      name: "Product B",
      data: [23, 12, 54, 61, 32, 56, 81],
    },
    {
      name: "Product C",
      data: [12, 25, 44, 30, 36, 45, 60],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    colors: ['#ffc107', '#dc3545', '#198754'], // Custom colors for each product
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Sales Trends',
      align: 'left',
    },
    legend: {
      show: true,
      position: 'top',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  };

  return (
    <Chart options={options} series={series} type="line" height={400} />
  );
}
