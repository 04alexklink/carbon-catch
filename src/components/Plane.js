import React from 'react'

const Plane = ({showPlaneForm}) => {
    return (
      <div className="energy-consumption-mode plane" onClick={() => showPlaneForm()}>
          <p id="energy-mode-title">Flight CO2</p>
          <i class = "fas fa-plane fa-7x"> </i>   
      </div>
    )
}

export default Plane
