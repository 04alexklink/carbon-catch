import React from 'react'

const Car = ({showCarForm}) => {
    console.log('In Car Component', {showCarForm})
    return (
        <div>
            <h1>Car CO2</h1>
           <img src="./../../images/car-emoji.jpeg" alt="image-of-car"></img>
           <br></br>
           <button onClick={() => showCarForm()}>Calculate Car Journey Emissions</button> 
        </div>
    )
}

export default Car
