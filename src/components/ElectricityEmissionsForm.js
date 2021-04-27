import React, {useState} from 'react'

const ElectricityEmissionsForm = () => {

  const initialState ={
    type: "electricity",
    electricity_unit: '',
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


  return (
      <div className='ElectricityEmissionForm'>
      <h2>Add Electricity Usage</h2>
      <form>
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
