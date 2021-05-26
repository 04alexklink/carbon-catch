import React from 'react'

const Plane = ({showPlaneForm}) => {
    return (
      <div className="energy-consumption-mode plane" onClick={() => showPlaneForm()}>
          <h2 className="energy-card-title">Flight CO2</h2>
          <i class = "fas fa-plane fa-7x"> </i>   
      </div>
    )
}

export default Plane
