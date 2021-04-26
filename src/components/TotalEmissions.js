import React from 'react'

const TotalEmissions = ({journeys}) => {
  let totalEmissions = 0;
  let vehicleEmissions = 0;
  let planeEmissions = 0;
  let electricityEmissions = 0;

  journeys.forEach(journey => {
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

  
    return (
        <div id="total-emissions">
            <h1>Total Emissions: {totalEmissions}</h1>
            <h2> Vehicle Emissions: {vehicleEmissions}</h2>
            <h2>Flight Emissions: {planeEmissions}</h2>
            <h2>Electricity Emissions: {electricityEmissions}</h2>
        </div>
    )
}

export default TotalEmissions
