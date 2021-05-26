import React from 'react'

const Electricity = ({showElectricityForm}) => {
  return (
    <div className="energy-consumption-mode electricity" onClick={() => showElectricityForm()}>
      <h2 className="energy-card-title">Electricity CO2</h2>
    <i class = "fas fa-bolt fa-7x"> </i>
    </div>
  )
}

export default Electricity
