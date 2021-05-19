import React from 'react'

const Car = ({showCarForm}) => {
    return (
        <div className="energy-consumption-mode car" onClick={() => showCarForm()}>
            <p id="energy-mode-title">Vehicle CO2</p>
            <i className = "fas fa-car fa-7x"></i>     
        </div>
    )
}

export default Car
