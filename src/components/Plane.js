import React from 'react'
import planeImage from '../images/Plane.png'

const Plane = ({showPlaneForm}) => {
    return (
      <div className="energy-consumption-mode plane" onClick={() => showPlaneForm()}>
          <p id="energy-mode-title">Flight CO2</p>
          <img src={planeImage} width="100px" height="100px" alt="image-of-plane"></img>   
      </div>
    )
}

export default Plane
