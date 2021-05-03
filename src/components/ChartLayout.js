import React from 'react'

const ChartLayout = ({heading, children, ...otherProps}) => {
    return (
        <div className="chart" {...otherProps}>
          <h2>{heading}</h2>
          {children}
        </div>
    )
}

export default ChartLayout

