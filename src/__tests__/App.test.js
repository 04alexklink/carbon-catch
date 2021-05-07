import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'
import vehicleAPIResponse from '../__mocks__/vehicle.json'
import flightAPIResponse from '../__mocks__/plane.json'


afterEach(cleanup)

describe('Testing Vehicle Components and API calls',() => {

test('Car and CarEmissionForms are connected',() => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  expect(screen.getByText("Add Car Journey Details")).toBeInTheDocument()
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