import './App.css';
import './styles/app.css';
import Header from './components/Header'
import Header2 from './components/Header2'
import EmissionTypesContainer from './components/EmissionTypesContainer'
import TotalEmissions from './components/TotalEmissions'
import CarEmissionForm from './components/CarEmissionForm'
import PlaneEmissionForm from './components/PlaneEmissionForm'
import ElectricityEmissionsForm from './components/ElectricityEmissionsForm'
import DataVisualisation from './components/DataVisualisation'

import { useState } from 'react';

function App() {
  const initialState = {
    showCarForm: false,
    showPlaneForm: false,
    showElectricityForm: false
  }
  const [formState, setFormState] = useState(initialState);
  //JourneyState
  const [journeysState, setJourneysState] = useState([])

  const addJourney = (journey) => {
    setJourneysState([...journeysState, journey])
  }

const showCarForm = () => {
  setFormState({...formState, showCarForm: !formState.showCarForm})
}

const showPlaneForm = () => {
  setFormState({...formState, showPlaneForm: !formState.showPlaneForm})
}

const showElectricityForm = () => {
  setFormState({...formState, showElectricityForm: !formState.showElectricityForm})
}

const showFormOrEmissionContainer = () => {
  if(formState.showCarForm) return <CarEmissionForm addJourney={addJourney} showCarForm={showCarForm}/>
  if(formState.showPlaneForm) return <PlaneEmissionForm addJourney={addJourney} showPlaneForm={showPlaneForm}/>
  if(formState.showElectricityForm) return <ElectricityEmissionsForm addJourney={addJourney} showElectricityForm={showElectricityForm}/>
  return <EmissionTypesContainer showCarForm={showCarForm} showPlaneForm={showPlaneForm} showElectricityForm={showElectricityForm}/>
}

  return (
    <div className="container">
      <div className="NavBar">
      <Header></Header>
      </div>
      <div className="MainSection">
      <Header2></Header2>
      <div className="main-container">
        {showFormOrEmissionContainer()}
      <TotalEmissions journeysData={journeysState}></TotalEmissions>
      </div>
      </div>
      <div className="data-visualisation-section">
      <DataVisualisation journeysData={journeysState}></DataVisualisation>
      </div>
    </div>
  );
}

export default App;
