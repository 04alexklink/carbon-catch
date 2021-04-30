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

  return (
    <div className='CarEmissionForm'>
      <h2>Add Car Journey Info</h2>
      <form onSubmit={(e)=> submitJourney(e)}>
      <label htmlFor="distance">Choose Miles or Km's</label>
      <select id="distance" data-testid="distance" name="distance" onChange={(e) => units(e)}>
        <option data-testid="val1" value="miles">Miles</option>
        <option data-testid= "val2" value="kilometres">Kilometres</option>
      </select>
      <label>Add journey distance:</label>
      <input type="number" onChange={(e) => distance(e)}></input>
      <button className="btn">Submit Journey</button>
      </form>
    </div>
  )
}

export default CarEmissionForm
