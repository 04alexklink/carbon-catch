import React, {useState} from 'react';
import axios from 'axios';

const PlaneEmissionForm = ({addJourney}) => {
  
  const initialState = {
    type: 'flight',
    passengers: 0,
    legs: [],
  }

  let departureIATA
  let destinationIATA

  const [planeFormData, setPlaneFormData] = useState(initialState)
  
  const passengers = (e) => {
    const numericPassengers = parseInt(e.target.value)
    setPlaneFormData({
      ...planeFormData, passengers: numericPassengers
    })
  }

  const changeDepartureIATA = (e) => {
    departureIATA = e.target.value
  }

  const changeDestinationIATA = (e) => {
    destinationIATA = e.target.value
  }

  const addJourneyLeg = (e) => {
    e.preventDefault()
    const journey = {}
    journey["departure_airport"] = departureIATA;
    journey["destination_airport"] = destinationIATA;
    setPlaneFormData({...planeFormData, legs: [...planeFormData.legs, journey]})
  }

  const submitJourney = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CARBON_INTERFACE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('https://www.carboninterface.com/api/v1/estimates', planeFormData, config)
    const carbonQuantity = res.data.data.attributes.carbon_kg
    const estimationDate = res.data.data.attributes.estimated_at
    const journey = {...planeFormData, estimationDate, carbonQuantity }
    addJourney(journey)
  }
    return (
        <div className='PlaneEmissionForm'>
      <h2>Add Flight Journey Info</h2>
      <form>
      <label htmlFor="Passengers">Choose Number of Passengers</label>
      <input type="number" id="passengernumbers" min="1" value={planeFormData.passengers} onChange={(e) => passengers(e)}></input>
      <label>Add Flight journey</label>
      <input type="text" maxLength="3" placeholder="Add departure airport IATA code" 
      value={departureIATA} onChange={(e) => changeDepartureIATA(e)}></input>
      <input type="text" maxLength="3" placeholder="Add destination airport IATA code"
      value={destinationIATA} onChange={(e) => changeDestinationIATA(e)}></input>
      <button className="btn" onClick={(e) => addJourneyLeg(e)}>Submit flight</button>
      <button className="btn" onClick={(e) => submitJourney(e)}>Submit Total Journey Details</button>
      </form>
    </div>
    )
}

export default PlaneEmissionForm
