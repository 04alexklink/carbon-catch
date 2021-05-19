import React from 'react'
import electricityImage from '../images/Electric.png'

const Electricity = ({showElectricityForm}) => {
  return (
    <div className="energy-consumption-mode electricity" onClick={() => showElectricityForm()}>
      <p id="energy-mode-title">Electricity CO2</p>
        <img src={electricityImage} width="100px" height="100px" alt="image-of-electric"></img>
    </div>
  )
}

export default Electricity
