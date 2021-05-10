import React from 'react'
import TotalEmissionsBarChart from './TotalEmissionsBarChart'
import EmissionsBreakdownPieChart from './EmissionsBreakdownPieChart'
const DataVisualisation = ({journeysData}) => {
  let totalEmissions = 0;
  let vehicleEmissions = 0;
  let planeEmissions = 0;
  let electricityEmissions = 0;

  journeysData.forEach(journey => {
    totalEmissions += journey.carbonQuantity
    switch(journey.type) {
      case 'flight': 
      planeEmissions += journey.carbonQuantity
      break
      case 'vehicle': 
      vehicleEmissions += journey.carbonQuantity
      break;
      case 'electricity': 
      electricityEmissions += journey.carbonQuantity
      break
    }
  })
  
  let vEmissionsPercent = vehicleEmissions > 0 ? vehicleEmissions/totalEmissions * 100 : 0
  let eEmissionsPercent = electricityEmissions > 0 ? electricityEmissions/totalEmissions * 100 : 0
  let pEmissionsPercent = planeEmissions > 0 ? planeEmissions/totalEmissions * 100 : 0
  
  
  return (
    <div className="data-visualisation-section">
      <TotalEmissionsBarChart userEmissions={totalEmissions} />
      <EmissionsBreakdownPieChart 
      vehicleEmissions={vEmissionsPercent}
      electricityEmissions={eEmissionsPercent}
      planeEmissions={pEmissionsPercent}    
      ></EmissionsBreakdownPieChart>
    </div>
  )
}

export default DataVisualisation;
