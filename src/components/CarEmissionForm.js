import React, {useState} from 'react'
import axios from 'axios'

const CarEmissionForm = ({addJourney, showCarForm}) => {

  const initialState = {
    type: "vehicle",
    distance_unit: 'mi',
    distance_value: 0,
    vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9"
  }
  const [carFormData, setCarFormData] = useState(initialState)

  const distance = (e) => {
    setCarFormData({
      ...carFormData, distance_value: e.target.value
    })
  }

  const units = (e) => {
    setCarFormData({
      ...carFormData, distance_unit: e.target.value
    })
  }

  const submitJourney = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CARBON_INTERFACE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('https://www.carboninterface.com/api/v1/estimates', carFormData, config)
    const carbonQuantity = res.data.data.attributes.carbon_kg
    const estimationDate = res.data.data.attributes.estimated_at
    const journey = {...carFormData, estimationDate, carbonQuantity }
    addJourney(journey)
    showCarForm()
  }

  const hideForm = (e) => {
    showCarForm()
  }

  return (
    <div className='emission-form'>
      <div className="form">
        <p className="small form-title">Add Car Journey Details</p>
        <form onSubmit={(e)=> submitJourney(e)}>
          <label htmlfor="distance" className="form-label">Choose Miles or Km's</label><br/>
          <select id="distance" data-testid="distance" name="distance" onChange={(e) => units(e)}>
            <option data-testid="val1" value="mi">Miles</option>
            <option data-testid= "val2" value="km">Kilometres</option>
          </select><br/>
          <label className="form-label">Add journey distance:</label><br/>
          <input type="number" onChange={(e) => distance(e)}></input><br/>
          <button className="btn" data-testid="submit-button">Submit Journey</button>
        </form>
      </div>
      <div id="how-to-use">
        <p className="small explanation">
          Please select either km's or miles and 
          provide a trip distance to calculate
          your journey emissions. 
        </p>
          <p className="small explanation">Not what you were after?</p>
          <button className="btn" onClick={(e) => hideForm(e)} className="return-button">Go back</button>
      </div>
    </div>
  )
}

export default CarEmissionForm
