import React, {useState} from 'react';
import axios from 'axios';

const PlaneEmissionForm = ({addJourney, showPlaneForm}) => {
  
  const initialState = {
    type: 'flight',
    passengers: 0,
    departureIATA: '',
    destinationIATA: ''
  }

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
    setPlaneFormData({
      ...planeFormData, departureIATA: e.target.value
    })
  }

  const changeDestinationIATA = (e) => {
    setPlaneFormData({
      ...planeFormData, destinationIATA: e.target.value
    })
  }

  const submitJourney = async (e) => {
    e.preventDefault()
    let trip = {}
    trip["departure_airport"] = planeFormData.departureIATA;
    trip["destination_airport"] = planeFormData.destinationIATA;
    const flightData = {
      type: 'flight',
      passengers: planeFormData.passengers,
      legs: [trip]
    }
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CARBON_INTERFACE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('https://www.carboninterface.com/api/v1/estimates', flightData, config)
    const carbonQuantity = res.data.data.attributes.carbon_kg
    const estimationDate = res.data.data.attributes.estimated_at
    const journey = {...flightData, estimationDate, carbonQuantity }
    addJourney(journey)
    showPlaneForm()
  }
    return (
      <div className='emission-form'>
        <div className="form">    
          <p className="small form-title">Add Flight Journey Details</p>
          <form>
          <label className="form-label" htmlFor="Passengers">Choose Number of Passengers</label><br/>
          <input type="number" id="passengernumbers" min="1" value={planeFormData.passengers} onChange={(e) => passengers(e)}></input><br/>
          <label className="form-label" >Add Flight journey IATA's</label><br/>
          <input type="text" maxLength="3" placeholder="Departure airport IATA" 
          value={planeFormData.departureIATA} onChange={(e) => changeDepartureIATA(e)}></input><br/>
          <input type="text" maxLength="3" placeholder="Destination airport IATA"
          value={planeFormData.destinationIATA} onChange={(e) => changeDestinationIATA(e)}></input><br/>
          < button className = "btn"
          data-testid = "submit-button"
          onClick = {
            (e) => submitJourney(e)
          } > Submit Journey</button>
          </form>
        </div>
        <div id="how-to-use">
          <p className="small explanation">
            Please provide the number of passengers and the IATA code for the departure and destination
            airport that can be found <a href="https://www.iata.org/en/publications/directories/code-search/">here</a>
          </p>
          <p className="small explanation">Not what you were after?</p>
          <button onClick={(e) => hideForm(e)} className="return-button">Go back</button>
        </div>
    </div>
    )
}

export default PlaneEmissionForm
