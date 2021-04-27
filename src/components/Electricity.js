import React from 'react'
import electricityImage from '../images/electricity.png'

const Electricity = ({showElectricityForm}) => {
  return (
    <div>
      <h1>Electricity CO2</h1>
           <img src={electricityImage} width="100px" height="100px" alt="image-of-electric"></img>
           <br></br>
           <button onClick={() => showElectricityForm()}>Calculate Electricity Emissions</button>
    </div>
  )
}

export default Electricity
