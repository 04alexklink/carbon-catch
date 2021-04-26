import './App.css';
import './styles/app.css';
import Header from './components/Header'
import Header2 from './components/Header2'
import EmissionTypesContainer from './components/EmissionTypesContainer'
import TotalEmissions from './components/TotalEmissions'
import CarEmissionForm from './components/CarEmissionForm'
import { useState } from 'react';

function App() {
  const initialState = {showCarForm: false}
  const [formState, setFormState] = useState(initialState);
  //JourneyState
  const [journeysState, setJourneysState] = useState([])

  const addJourney = (journey) => {
    setJourneysState([...journeysState, journey])
  }


const showCarForm = () => {
  console.log('Show car form pressed')
  setFormState({showCarForm: true})
}

  return (
    <div className="App">
      <Header></Header>
      <Header2></Header2>
      <div className="container">
        {formState.showCarForm ? (<CarEmissionForm addJourney={addJourney}></CarEmissionForm>) : (<EmissionTypesContainer showCarForm={showCarForm}></EmissionTypesContainer>)} 
      <TotalEmissions></TotalEmissions>
      </div>
    </div>
  );
}

export default App;
