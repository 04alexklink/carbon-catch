import React from 'react'
import carImage from '../images/car-emoji.jpeg'

const Car = ({showCarForm}) => {
    console.log('In Car Component', {showCarForm})
    return (
        <div>
            <h1>Car CO2</h1>
           <img src={carImage} width="100px" height="100px" alt="image-of-car"></img>
           <br></br>
           <button onClick={() => showCarForm()}>Calculate Car Journey Emissions</button> 
        </div>
    )
}

export default Car
