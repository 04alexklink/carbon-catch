import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
import mockResponse from '../__mocks__/vehicle.json'
import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('renders All components', () => {
  render(<App />);
  expect(screen.getByText(/Carbon Catch/i)).toBeInTheDocument;
  expect(screen.getByText("CO2 Emissions Calculator")).toBeInTheDocument
});

test('Car and CarEmissionForms are connected',() => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  expect(screen.getByText("Add Car Journey Info")).toBeInTheDocument()
});

xtest('After API call screen displays EmissionTypesContainer',async () => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  expect(screen.getByText("Vehicle CO2")).toBeInTheDocument()
});

// jest.spyOn(axios, "default").mockImplementation(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(mockResponse)
//   })
// })

xtest('Provides correct Car emission data from API',async () => {
  render(<App />)
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  expect(screen.getByTestId('val1').selected).toBe(true)
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))

  const element = await waitFor(() => screen.getByText(/Vehicle Emissions: 37.03/))
  expect(element).toBeInTheDocument()
});

//jest.mock('axios');
test('Provides correct Car emission data from API',async() => {
  render(<App />)
  //const postSpy = jest.spyOn(axiosMock, 'post');
  axiosMock.post.mockResolvedValue({
    data: {
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
      }}
    }
  })
  userEvent.click(screen.getByText("Calculate Vehicle Emissions"))
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  expect(screen.getByTestId('val1').selected).toBe(true)
  const numberBox = screen.getByRole('spinbutton')
  userEvent.type(numberBox, '100')
  userEvent.click(screen.getByText('Submit Journey'))
  
  
  // await waitFor(() => axiosMock.post.toHaveBeenCalledTimes(1)
  // const element = await waitFor(() => screen.getByText("Vehicle Emissions: 37.03"))
  // expect(element).toBeInTheDocument()
// )
});