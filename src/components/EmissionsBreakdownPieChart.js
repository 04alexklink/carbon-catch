import React from 'react'
import {PieChart, Legend, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import { TooltipContainerStyles } from '../constants/tooltip-container-styles.'
import ChartLayout from './ChartLayout'
const EmissionsBreakdownPieChart = () => {


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
    const COLOURS = ["#3066BE", "#20A39E", "#A4036F"]
    const data = [
        {name: "Electricity Emissions", percentage: 25},
        {name: "Flight Emissions", percentage: 25},
        {name: "Vehicle Emissions", percentage: 50}
    ]
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
