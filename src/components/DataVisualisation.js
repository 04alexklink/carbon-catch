import React from 'react'
import TotalEmissionsBarChart from './TotalEmissionsBarChart'
import EmissionsBreakdownPieChart from './EmissionsBreakdownPieChart'
const DataVisualisation = () => {
  let userEmissions = 12000
  return (
    <div className="data-visualisation-section">
      <TotalEmissionsBarChart userEmissions={userEmissions} />
      <EmissionsBreakdownPieChart></EmissionsBreakdownPieChart>
    </div>
  )
}

export default DataVisualisation;
