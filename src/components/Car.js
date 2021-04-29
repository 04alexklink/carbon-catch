import React from 'react'
import carImage from '../images/Car.png'

const Car = ({showCarForm}) => {
    console.log('In Car Component', {showCarForm})
    return (
        <div className="energy-consumption-mode car">
            <p id="energy-mode-title">Vehicle CO2</p>
           <img src={carImage} width="100px" height="100px" alt="image-of-car"></img>
           <br></br>
           <button onClick={() => showCarForm()}>Calculate Vehicle Emissions</button> 
        </div>
    )
}

export default Car
