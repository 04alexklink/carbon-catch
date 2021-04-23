import './App.css';
import './styles/app.css';
import Header from './components/Header'
import Header2 from './components/Header2'
import EmissionTypesContainer from './components/EmissionTypesContainer'
import TotalEmissions from './components/TotalEmissions'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header2></Header2>
      <div className="container">
      <EmissionTypesContainer></EmissionTypesContainer>
      <TotalEmissions></TotalEmissions>
      </div>
    </div>
  );
}

export default App;
