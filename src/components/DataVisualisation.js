import React from 'react'
import TotalEmissionsBarChart from './TotalEmissionsBarChart'
import EmissionsBreakdownPieChart from './EmissionsBreakdownPieChart'
const DataVisualisation = ({journeysData}) => {
  let userEmissions = 0;
  if(journeysData.length > 0) {
    journeysData.forEach(journey => {
      userEmissions += journey.carbonQuantity
    })
  }
  
  return (
    <div className="data-visualisation-section">
      <TotalEmissionsBarChart userEmissions={userEmissions} />
      <EmissionsBreakdownPieChart></EmissionsBreakdownPieChart>
    </div>
  )
}

export default DataVisualisation;
