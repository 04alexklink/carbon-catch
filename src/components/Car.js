import React from 'react'

const Car = ({showCarForm}) => {
    return (
        <div className="energy-consumption-mode car" onClick={() => showCarForm()}>
            <h2 className="energy-card-title">Vehicle CO2</h2>
            <i className = "fas fa-car fa-7x"></i>     
        </div>
    )
}

export default Car
