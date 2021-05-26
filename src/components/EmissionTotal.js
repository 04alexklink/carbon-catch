import React from 'react'

const EmissionTotal = ({emissionsVal, iconClass}) => {
  return (
    <div className="emission-total">
    <i className={iconClass}></i>
    <p className="total"> Emissions: {emissionsVal}</p>
    </div>
  )
}

export default EmissionTotal
