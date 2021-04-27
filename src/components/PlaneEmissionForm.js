import React, {useState} from 'react';
import axios from 'axios';

const PlaneEmissionForm = () => {
  
  const initialState = {
    type: 'flight',
    passengers: 0,
    legs: [],
  }

  let departureIATA
  let destinationIATA

  const [planeFormData, setPlaneFormData] = useState(initialState)
  
  const passengers = (e) => {
    setPlaneFormData({
      ...planeFormData, passengers: e.target.value
    })
  }

  const changeDepartureIATA = (e) => {
    departureIATA = e.target.value
  }

  const changeDestinationIATA = (e) => {
    destinationIATA = e.target.value
  }

  const submitJourney = (e) => {
    e.preventDefault()
    const journey = {}
    journey["departure_airport"] = departureIATA;
    journey["destination_airport"] = destinationIATA;
    // setPlaneFormData(...planeFormData, planeFormData.legs.push(journey))
    console.log(planeFormData, "submitjourney")
  }
    return (
        <div className='PlaneEmissionForm'>
      <h2>Add Flight Journey Info</h2>
      <form onSubmit={(e) => submitJourney(e)}>
      <label htmlFor="Passengers">Choose Number of Passengers</label>
      <input type="number" id="passengernumbers" min="1" value={planeFormData.passengers} onChange={(e) => passengers(e)}></input>
      <label>Add Flight journey</label>
      <input type="text" maxLength="3" placeholder="Add departure airport IATA code" 
      value={planeFormData.departureIATA} onChange={(e) => changeDepartureIATA(e)}></input>
      <input type="text" maxLength="3" placeholder="Add destination airport IATA code"
      value={planeFormData.destinationIATA} onChange={(e) => changeDestinationIATA(e)}></input>
      <button className="btn">Submit Flight Journey</button>
      </form>
    </div>
    )
}

export default PlaneEmissionForm
