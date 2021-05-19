import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartLayout from './ChartLayout'

const TotalEmissionsBarChart = ({userEmissions}) => {
  const data = [
  {
    Avg_emissions_pp: 12700,
    Your_emissions: parseFloat(userEmissions.toFixed(2))
  }
];

  return (
    <ChartLayout heading="Annual Emissions">
      <ResponsiveContainer width="100%" height={300} >
      <BarChart
      data={data}
      fontSize={14}
    >
      <CartesianGrid 
      vertical={false}/>
      <XAxis dataKey="name">
      <Label 
      position="bottom"
      style={{textAnchor: "middle"}}
      />
      </XAxis>
      <YAxis>
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="Avg_emissions_pp" fill='#61D095' />
      <Bar dataKey="Your_emissions" fill='#A4036F' />
    </BarChart>
    </ResponsiveContainer>
     </ChartLayout>
  )
}

export default TotalEmissionsBarChart
