import React, {useState} from 'react'
import axios from 'axios'

const ElectricityEmissionsForm = ({addJourney, showElectricityForm}) => {

  const initialState ={
    type: "electricity",
    electricity_unit: 'mwh',
    electricity_value: 0,
    country: 'us'
  }

  const [electricityFormData, setElectricityFormData] = useState(initialState)

  const units = (e) => {
    setElectricityFormData({
      ...electricityFormData, electricity_unit: e.target.value
    })
  }

  const electricity = (e) => {
    setElectricityFormData({
      ...electricityFormData, electricity_value: parseInt(e.target.value)
    })
  }

  const submitUsage = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CARBON_INTERFACE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('https://www.carboninterface.com/api/v1/estimates', electricityFormData, config)
    const carbonQuantity = res.data.data.attributes.carbon_kg
    const estimationDate = res.data.data.attributes.estimated_at
    const journey = {...electricityFormData, estimationDate, carbonQuantity }
    addJourney(journey)
    showElectricityForm()
  }

  return (
      <div className='ElectricityEmissionForm'>
      <h2>Add Electricity Usage</h2>
      <form onSubmit={(e) => submitUsage(e)}>
      <label htmlFor="electricity_units">Choose mwh or kwh</label>
      <select id="electricity_units" name="electricity_units" onChange={(e) => units(e)}>
        <option value="mwh">Mwh</option>
        <option value="kwh">Kwh</option>
      </select>
      <label>Add Electricity Value:</label>
      <input type="number" onChange={(e) => electricity(e)}></input>
      <button className="btn">Submit Usage</button>
      </form>
    </div>
  )
}

export default ElectricityEmissionsForm
