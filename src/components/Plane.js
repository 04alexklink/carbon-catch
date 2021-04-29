import React from 'react'
import planeImage from '../images/Plane.png'

const Plane = ({showPlaneForm}) => {
    return (
      <div className="energy-consumption-mode plane">
          <p id="energy-mode-title">Flight CO2</p>
          <img src={planeImage} width="100px" height="100px" alt="image-of-plane"></img>
          <br></br>
          <button onClick={() => showPlaneForm()}>Calculate Flight Emissions</button>    
      </div>
    )
}

export default Plane
