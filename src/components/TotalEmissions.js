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
            <p><strong>Total Emissions:</strong> {parseFloat(totalEmissions.toFixed(2))}</p>
            <p>Vehicle Emissions: {parseFloat(vehicleEmissions.toFixed(2))}</p>
            <p>Flight Emissions: {parseFloat(planeEmissions.toFixed(2))}</p>
            <p>Electricity Emissions: {parseFloat(electricityEmissions.toFixed(2))}</p>
        </div>
    )
}

export default TotalEmissions
