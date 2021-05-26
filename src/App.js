import './App.css';
import './styles/app.css';
import planeImage from './Rainforest.jpg'
import Header from './components/Header'
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
      <>
      <Header></Header>
      <div className="container">
          <div className="main-container">
            {showFormOrEmissionContainer()}
          </div>
          <TotalEmissions journeysData={journeysState}></TotalEmissions>
          <DataVisualisation journeysData={journeysState}></DataVisualisation>
        </div>
        {/* <img src={planeImage} className="home-img"></img> */}
    </>
  );
}

export default App;
