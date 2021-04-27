import './App.css';
import './styles/app.css';
import Header from './components/Header'
import Header2 from './components/Header2'
import EmissionTypesContainer from './components/EmissionTypesContainer'
import TotalEmissions from './components/TotalEmissions'
import CarEmissionForm from './components/CarEmissionForm'
import PlaneEmissionForm from './components/PlaneEmissionForm'
import { useState } from 'react';

function App() {
  const initialState = {
    showCarForm: false,
    showPlaneForm: false
  }
  const [formState, setFormState] = useState(initialState);
  //JourneyState
  const [journeysState, setJourneysState] = useState([])

  const addJourney = (journey) => {
    setJourneysState([...journeysState, journey])
  }


const showCarForm = () => {
  setFormState({...formState, showCarForm: true})
}

const showPlaneForm = () => {
  setFormState({...formState, showPlaneForm: true})
}

const showFormOrEmissionContainer = () => {
  if(formState.showCarForm) return <CarEmissionForm addJourney={addJourney}></CarEmissionForm>
  if(formState.showPlaneForm) return <PlaneEmissionForm></PlaneEmissionForm>
  return <EmissionTypesContainer showCarForm={showCarForm} showPlaneForm={showPlaneForm}></EmissionTypesContainer>
}

  return (
    <div className="App">
      <Header></Header>
      <Header2></Header2>
      <div className="container">
        {showFormOrEmissionContainer()}
      <TotalEmissions journeys={journeysState}></TotalEmissions>
      </div>
    </div>
  );
}

export default App;
