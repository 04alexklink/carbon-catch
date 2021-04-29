import { getByText, render, screen, waitFor} from '@testing-library/react';
import App from '../App';
//import mockResponse from '../__mocks__/vehicle.json'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

test('renders All components', () => {
  render(<App />);
  expect(screen.getByText(/Carbon Catch/i)).toBeInTheDocument;
  expect(screen.getByText("CO2 Emissions Calculator")).toBeInTheDocument
});

// jest.spyOn(axios, "default").mockImplementation(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(mockResponse)
//   })
// })

xtest('Provides correct Car emission data from API',async () => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  const selector = screen.getByRole('combobox')
  userEvent.click(selector, 'Miles')
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  
  const element = await waitFor(() => screen.getByText("Vehicle Emissions: 0"))
  expect(element).toBeInTheDocument()
  
});

jest.mock('axios');
xtest('Provides correct Car emission data from API',async () => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  const selector = screen.getByRole('combobox')
  userEvent.click(selector, 'Miles')
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  
  axios.get.mockResolvedValue({
    "data": {
      "id": "6108d711-be04-4dc4-93f9-43d969fd5273",
      "type": "estimate",
      "attributes": {
        "distance_value": 100.0,
        "vehicle_make": "Toyota",
        "vehicle_model": "Corolla",
        "vehicle_year": 1993,
        "vehicle_model_id": "7268a9b7-17e8-4c8d-acca-57059252afe9",
        "distance_unit": "mi",
        "estimated_at": "2021-01-10T15:24:32.568Z",
        "carbon_g": 37029,
        "carbon_lb": 81.64,
        "carbon_kg": 37.03,
        "carbon_mt": 0.04
      }
    }
  })
  const element = await waitFor(() => screen.getByText("Vehicle Emissions: 0"))
  expect(element).toBeInTheDocument()
});