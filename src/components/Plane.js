import React from 'react'
import planeImage from '../images/plane-emoji.png'

const Plane = ({showPlaneForm}) => {
    return (
      <div>
        <div>
          <h1>Plane CO2</h1>
          <img src={planeImage} width="100px" height="100px" alt="image-of-plane"></img>
          <br></br>
          <button onClick={() => showPlaneForm()}>Calculate Plane Journey Emissions</button> 
        </div>   
      </div>
    )
}

export default Plane
