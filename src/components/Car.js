import React from 'react'
import carImage from '../images/Car.png'

const Car = ({showCarForm}) => {
    return (
        <div className="energy-consumption-mode car" onClick={() => showCarForm()}>
            <p id="energy-mode-title">Vehicle CO2</p>
            <i className="fas fa-car"></i>
        </div>
    )
}

export default Car
