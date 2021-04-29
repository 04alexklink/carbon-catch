import React from 'react'
import electricityImage from '../images/Electric.png'

const Electricity = ({showElectricityForm}) => {
  return (
    <div className="energy-consumption-mode electricity">
      <p id="energy-mode-title">Electricity CO2</p>
           <img src={electricityImage} width="100px" height="100px" alt="image-of-electric"></img>
           <br></br>
           <button onClick={() => showElectricityForm()}>Calculate Electricity Emissions</button>
    </div>
  )
}

export default Electricity
