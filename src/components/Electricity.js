import React from 'react'

const Electricity = ({showElectricityForm}) => {
  return (
    <div className="energy-consumption-mode electricity" onClick={() => showElectricityForm()}>
      <p id="energy-mode-title">Electricity CO2</p>
    <i class = "fas fa-bolt fa-7x"> </i>
    </div>
  )
}

export default Electricity
