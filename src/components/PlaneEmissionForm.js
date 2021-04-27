import React from 'react'

const PlaneEmissionForm = () => {
    return (
        <div className='PlaneEmissionForm'>
      <h2>Add Flight Journey Info</h2>
      <form>
      <label htmlFor="Passengers">Choose Number of Passengers</label>
      <input type="number" id="passengernumbers" name="passengernumbers"></input>
      <label>Add Flight journey</label>
      <input type="text" maxlength="3" placeholder="Add departure airport IATA code"></input>
      <input type="text" maxlength="3" placeholder="Add destination airport IATA code"></input>
      <button className="btn">Submit Flight Journey</button>
      </form>
    </div>
    )
}

export default PlaneEmissionForm
