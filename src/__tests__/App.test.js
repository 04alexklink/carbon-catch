import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'
import vehicleAPIResponse from '../__mocks__/vehicle.json'


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