import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
      <ResponsiveContainer width={"100%"} height={400}>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 30
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="name">
      <Label 
      position="bottom"
      style={{textAnchor: "middle"}}
      />
      </XAxis>
      <YAxis>
        <Label 
        value={"Carbon Emissions (kg)"}
        position="left"
        angle={-90}
        style={{textAnchor: "middle"}}
        />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="Avg_emissions_pp" fill="#8884d8" />
      <Bar dataKey="Your_emissions" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default TotalBarChart
