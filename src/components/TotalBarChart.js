import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const TotalBarChart = ({userEmissions}) => {
  const data = [
  {
    name: 'Total Annual Emissions Comparison',
    Avg_emissions_pp: 12700,
    Your_emissions: parseInt(userEmissions)
  }
];

  return (
    <div className="totalbarchart">
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Avg_emissions_pp" fill="#8884d8" />
      <Bar dataKey="Your_emissions" fill="#82ca9d" />
    </BarChart>
    </div>
  )
}

export default TotalBarChart
