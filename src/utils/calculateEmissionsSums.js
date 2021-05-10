const calculateEmissionTypeSums = (journeysData) => {
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

    let emissionsSums = []
    emissionsSums.push(parseFloat(totalEmissions.toFixed(2)))
    emissionsSums.push(parseFloat(vehicleEmissions.toFixed(2)))
    emissionsSums.push(parseFloat(planeEmissions.toFixed(2)))
    emissionsSums.push(parseFloat(electricityEmissions.toFixed(2)))
    return emissionsSums
}

module.exports = calculateEmissionTypeSums;