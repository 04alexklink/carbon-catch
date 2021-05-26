import React from 'react'
import Car from './Car'
import Plane from './Plane'
import Electricity from './Electricity'

const EmissionTypesContainer = ({showCarForm, showPlaneForm, showElectricityForm}) => {
    return (
        <div className="emission-types-container">
            <Car showCarForm={showCarForm}></Car>
            <Plane showPlaneForm={showPlaneForm}></Plane>
            <Electricity showElectricityForm={showElectricityForm}></Electricity>
        </div>
    )
}

export default EmissionTypesContainer

