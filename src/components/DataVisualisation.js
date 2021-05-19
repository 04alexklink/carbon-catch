import React from 'react'
import TotalEmissionsBarChart from './TotalEmissionsBarChart'
import EmissionsBreakdownPieChart from './EmissionsBreakdownPieChart'
import calculateEmissionTypeSums from '../utils/calculateEmissionsSums'
const DataVisualisation = ({journeysData}) => {
  const [totalEmissions, 
        vehicleEmissions, 
        planeEmissions, 
        electricityEmissions] = calculateEmissionTypeSums(journeysData)
  
  let vEmissionsPercent = vehicleEmissions > 0 ? vehicleEmissions/totalEmissions * 100 : 0
  let eEmissionsPercent = electricityEmissions > 0 ? electricityEmissions/totalEmissions * 100 : 0
  let pEmissionsPercent = planeEmissions > 0 ? planeEmissions/totalEmissions * 100 : 0
  
  
  return (
    <div className="data-visualisation">
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
