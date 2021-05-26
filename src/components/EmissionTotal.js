import React from 'react'

const EmissionTotal = ({emissionsVal, iconClass}) => {
  return (
    <div className="emission-total">
    <i className={iconClass}></i>
    <h3 className="total"> Emissions: {emissionsVal}</h3>
    </div>
  )
}

export default EmissionTotal
