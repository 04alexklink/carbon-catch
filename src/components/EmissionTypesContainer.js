import React from 'react'
import Car from './Car'

const EmissionTypesContainer = ({showCarForm}) => {
    return (
        <div className="emissions-container">
            <Car showCarForm={showCarForm}></Car>
        </div>
    )
}

export default EmissionTypesContainer

