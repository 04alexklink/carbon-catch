import React from 'react'
import calculateEmissionTypeSums from '../utils/calculateEmissionsSums'

const TotalEmissions = ({journeysData}) => {
  const [totalEmissions, 
    vehicleEmissions, 
    planeEmissions, 
    electricityEmissions] = calculateEmissionTypeSums(journeysData)

    return (
        <div className="total-emissions">
            <p><strong>Total Emissions: {totalEmissions}</strong></p>
            <p>Vehicle Emissions: {vehicleEmissions}</p>
            <p>Flight Emissions: {planeEmissions}</p>
            <p>Electricity Emissions: {electricityEmissions}</p>
        </div>
    )
}

export default TotalEmissions
