import React from 'react'
import {PieChart, Legend, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import { TooltipContainerStyles } from '../constants/tooltip-container-styles.'
import ChartLayout from './ChartLayout'
const EmissionsBreakdownPieChart = (props) => {
const {vehicleEmissions, electricityEmissions, planeEmissions} = props


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" fontSize={12} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
    let data, COLOURS
    if(vehicleEmissions + electricityEmissions + planeEmissions === 0) {
      data = [{name: "No data available", percentage: 0}]
      COLOURS = ["grey"]
    }
    else {
      data = [
        {
          name: "Electricity Emissions",
          percentage: parseFloat(electricityEmissions.toFixed(2))
        },
        {
          name: "Flight Emissions",
          percentage: parseFloat(planeEmissions.toFixed(2))
          },
        {
          name: "Vehicle Emissions",
          percentage: parseFloat(vehicleEmissions.toFixed(2))
          }
      ]
      COLOURS = ["#3066BE", "#20A39E", "#A4036F"]
    }
    
    return (
        <ChartLayout heading="Energy Consumption Breakdown">
          <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="percentage"
            outerRadius={100}
            innerRadius={40}
            name="name"
            unit="%"
            label={renderCustomizedLabel}
            labelLine={false}
             >
              {data.map((type, index) => (
                <Cell key={`cell-${index}`} fill={COLOURS[index % COLOURS.length]}/>
              ))}
            </Pie>
            <Legend/>
            <Tooltip cursor={false} contentStyle={TooltipContainerStyles}
            formatter={(percentage, name) => [`${percentage}%`, `${name}`]}/>
          </PieChart>
          </ResponsiveContainer>
          </ChartLayout>
    )
}

export default EmissionsBreakdownPieChart
