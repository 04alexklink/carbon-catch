import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'
import vehicleAPIResponse from '../__mocks__/vehicle.json'
import flightAPIResponse from '../__mocks__/plane.json'
import electricityAPIResponse from '../__mocks__/electricity.json'


afterEach(cleanup)

describe('Testing Vehicle Components and API calls',() => {

test('Car and CarEmissionForms are connected',() => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  expect(screen.getByText("Add Car Journey Details")).toBeInTheDocument()
});

test('Back button switches between Car and CarEmissionForms', () => {
  render( < App / > )
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.click(screen.getByText("Go back"))
  expect(screen.getByText("Calculate Vehicle Emissions")).toBeInTheDocument()
});

test('EmissionsTypeContainer is rendered after CarEmissionForm API call',async () => {
  render(<App />)
  axiosMock.post.mockResolvedValue(vehicleAPIResponse)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  const element = await waitFor(() => screen.getByText("Vehicle CO2"))
  expect(element).toBeInTheDocument()
});

test('Provides correct Car emission data from API',async() => {
  render(<App />)
  axiosMock.post.mockResolvedValue(vehicleAPIResponse)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  const element = await waitFor(() => screen.getByText("Vehicle Emissions: 37.03"))
  expect(element).toBeInTheDocument()
});
})

describe('Testing Plane Components and API calls',() => {

  test('Plane and PlaneEmissionForms are connected',() => {
    render(<App />)
    userEvent.click(screen.getByText("Calculate Flight Emissions"))
    expect(screen.getByText("Add Flight Journey Details")).toBeInTheDocument()
  });

  test('Back button switches between Plane and PlaneEmissionForms', () => {
    render( < App / > )
    userEvent.click(screen.getByText("Calculate Flight Emissions"))
    userEvent.click(screen.getByText("Go back"))
    expect(screen.getByText("Calculate Flight Emissions")).toBeInTheDocument()
  });
  
  test('EmissionsTypeContainer is rendered after PlaneEmissionForm API call',async () => {
    render(<App />)
    axiosMock.post.mockResolvedValue(flightAPIResponse)
    userEvent.click(screen.getByText("Calculate Flight Emissions"))
    const numberBox = screen.getByRole('spinbutton')
    userEvent.type(numberBox, '2')
    const departureIATA = screen.getByPlaceholderText("Add departure airport IATA code")
    userEvent.type(departureIATA, 'lhr')
    const destinationIATA = screen.getByPlaceholderText("Add destination airport IATA code")
    userEvent.type(destinationIATA, 'jfk')
    userEvent.click(screen.getByText('Submit Journey'))
    const element = await waitFor(() => screen.getByText("Flight CO2"))
    expect(element).toBeInTheDocument()
  });
  
  test('Provides correct Plane emission data from API',async() => {
    render(<App />)
    axiosMock.post.mockResolvedValue(flightAPIResponse)
    userEvent.click(screen.getByText("Calculate Flight Emissions"))
    const numberBox = screen.getByRole('spinbutton')
    userEvent.type(numberBox, '2')
    const departureIATA = screen.getByPlaceholderText("Add departure airport IATA code")
    userEvent.type(departureIATA, 'lhr')
    const destinationIATA = screen.getByPlaceholderText("Add destination airport IATA code")
    userEvent.type(destinationIATA, 'jfk')
    userEvent.click(screen.getByText('Submit Journey'))
    const element = await waitFor(() => screen.getByText("Flight Emissions: 1998.23"))
    expect(element).toBeInTheDocument()
  });
})

describe('Testing Electricity Components and API calls', () => {

  test('Electricity and ElectricityEmissionForms are connected', () => {
    render( < App / > )
    userEvent.click(screen.getByText("Calculate Electricity Emissions"))
    expect(screen.getByText("Add Electricity Usage Details")).toBeInTheDocument()
  });

  test('Back button switches between Electricity and ElectricityEmissionForms', () => {
    render( < App / > )
    userEvent.click(screen.getByText("Calculate Electricity Emissions"))
    userEvent.click(screen.getByText("Go back"))
    expect(screen.getByText("Calculate Electricity Emissions")).toBeInTheDocument()
  });

  test('EmissionsTypeContainer is rendered after ElectricityEmissionForm API call', async () => {
    render( < App / > )
    axiosMock.post.mockResolvedValue(electricityAPIResponse)
    userEvent.click(screen.getByText("Calculate Electricity Emissions"))
    userEvent.selectOptions(screen.getByTestId('unit'), ['mwh'])
    const numberBox = screen.getByRole('spinbutton')
    userEvent.type(numberBox, '42')
    userEvent.click(screen.getByText('Submit Usage'))
    const element = await waitFor(() => screen.getByText("Calculate Electricity Emissions"))
    expect(element).toBeInTheDocument()
  });

  test('Provides correct Electricity emission data from API', async () => {
    render( < App / > )
    axiosMock.post.mockResolvedValue(electricityAPIResponse)
    userEvent.click(screen.getByText("Calculate Electricity Emissions"))
    userEvent.selectOptions(screen.getByTestId('unit'), ['mwh'])
    const numberBox = screen.getByRole('spinbutton')
    userEvent.type(numberBox, '42')
    userEvent.click(screen.getByText('Submit Usage'))
    const element = await waitFor(() => screen.getByText("Electricity Emissions: 18051"))
    expect(element).toBeInTheDocument()
  });
})