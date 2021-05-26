import React from 'react'
import calculateEmissionTypeSums from '../utils/calculateEmissionsSums'
import EmissionTotal from './EmissionTotal'

const TotalEmissions = ({journeysData}) => {
  const [totalEmissions, 
    vehicleEmissions, 
    planeEmissions, 
    electricityEmissions] = calculateEmissionTypeSums(journeysData)

  const vehicleIconClass = "fas fa-car fa-3x"
  const electricityIconClass = "fas fa-bolt fa-3x"
  const planeIconClass = "fas fa-plane fa-3x"
    return (
        <div className="total-emissions">
            <h3 className="total">Total Emissions: {totalEmissions}</h3>
            <EmissionTotal iconClass={vehicleIconClass} emissionsVal={vehicleEmissions}></EmissionTotal>
            <EmissionTotal iconClass={planeIconClass} emissionsVal={planeEmissions}></EmissionTotal>
            <EmissionTotal iconClass={electricityIconClass} emissionsVal={electricityEmissions}></EmissionTotal>
        </div>
    )
}

export default TotalEmissions
