import React from 'react'
import Car from './Car'
import Plane from './Plane'

const EmissionTypesContainer = ({showCarForm, showPlaneForm}) => {
    return (
        <div className="emissions-container">
            <Car showCarForm={showCarForm}></Car>
            <Plane showPlaneForm={showPlaneForm}></Plane>
        </div>
    )
}

export default EmissionTypesContainer

