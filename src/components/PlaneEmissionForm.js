import React, {useState} from 'react';
import axios from 'axios';

const PlaneEmissionForm = ({addJourney, showPlaneForm}) => {
  
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

  const hideForm = (e) => {
    showPlaneForm()
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
    showPlaneForm()
  }
    return (
      <div className='emission-form PlaneEmissionForm'>
        <div id="form">    
          <p className="largeTitle">Add Flight Journey Details</p>
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
        <div id="how-to-use">
          <p class="largeTitle">How to use</p>
          <p class="explanation">
            This estimate accepts passenger flight details and computes the carbon emissions 
            for the trip. Please provide the IATA code for the departure and destination
            airport that can be found <a href="https://www.iata.org/en/publications/directories/code-search/">here</a>. Please also provide the number of passengers for the journey. 
          </p>
          <div id="return-button">
          <p class="explanation">Not what you were after?</p>
          <button onClick={(e) => hideForm(e)} class="return-button">Go back</button>
          </div>
        </div>
    </div>
    )
}

export default PlaneEmissionForm
