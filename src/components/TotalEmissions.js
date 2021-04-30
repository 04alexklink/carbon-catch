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
        <div className="total-emissions">
            <p>Total Emissions: {totalEmissions}</p>
            <p data-testid="vehicleEmiss">Vehicle Emissions: {vehicleEmissions}</p>
            <p>Flight Emissions: {planeEmissions}</p>
            <p>Electricity Emissions: {electricityEmissions}</p>
        </div>
    )
}

export default TotalEmissions
