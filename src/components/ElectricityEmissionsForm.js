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

  const hideForm = (e) => {
    showElectricityForm()
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
      <div className='emission-form'>
      <div className="form">
      <p className="small form-title">Add Electricity Usage Details</p>
      <form onSubmit={(e) => submitUsage(e)}>
      <label className="form-label" htmlFor="electricity_units">Choose mwh or kwh</label><br/>
      <select id="electricity_units" data-testid="unit" name="electricity_units" onChange={(e) => units(e)}>
        <option data-testid="val1" value="mwh">Mwh</option>
        < option data-testid = "val2" value = "kwh" > Kwh </option>
      </select><br/>
      <label className="form-label">Add Electricity Value:</label><br/>
      <input type="number" onChange={(e) => electricity(e)}></input><br/>
      <button className="btn" data-testid="submit-button">Submit Usage</button>
      </form>
      </div>
      <div id="how-to-use">
        <p className="small explanation">
          Please select either mwh or kwh and then 
          provide the quantity of your electricity consumption.
        </p>
          <p className="small explanation">Not what you were after?</p>
          <button className="btn" onClick={(e) => hideForm(e)} className="return-button">Go back</button>
      </div>
    </div>
  )
}

export default ElectricityEmissionsForm
