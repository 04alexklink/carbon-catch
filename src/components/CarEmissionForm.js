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
    <div className='emission-form CarEmissionForm'>
      <div id="form">
      <p className="largeTitle">Add Car Journey Details</p>
      <form onSubmit={(e)=> submitJourney(e)}>
      <label htmlFor="distance">Choose Miles or Km's</label>
      <select id="distance" name="distance" onChange={(e) => units(e)}>
        <option value="mi">Miles</option>
        <option value="km">Kilometres</option>
      </select>
      <label>Add journey distance:</label>
      <input type="number" onChange={(e) => distance(e)}></input>
      <button className="btn">Submit Journey</button>
      </form>
      </div>
      <div id="how-to-use">
        <p class="largeTitle">How to use</p>
        <p class="explanation">
          This estimate can be done in either miles or kilometres. Please select one and then 
          provide a trip distance for us to calculate your journey emissions. DISCLAIMER: Assumes your car 
          is a Toyota Corolla...
        </p>
      </div>
    </div>
  )
}

export default CarEmissionForm
