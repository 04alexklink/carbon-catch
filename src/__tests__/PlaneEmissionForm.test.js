import React from 'react';
import '@testing-library/jest-dom'
import {
  render,
  screen
} from '@testing-library/react'
import PlaneEmissionForm from '../components/PlaneEmissionForm'


test('Displays Name of PlaneEmissionForm Component', () => {
  render( < PlaneEmissionForm / > )
  expect(screen.getByText("Add Flight Journey Details")).toBeInTheDocument
})

test('Displays spinbutton for number of passengers', () => {
  render( < PlaneEmissionForm / > )
  expect(screen.getByRole('spinbutton')).toBeInTheDocument
  expect(screen.getByText("Choose Number of Passengers")).toBeInTheDocument
})

test('Displays textboxes for departure and destination airports', () => {
  render( < PlaneEmissionForm / > )
  expect(screen.getByPlaceholderText('Add departure airport IATA code')).toBeInTheDocument
  expect(screen.getByPlaceholderText('Add destination airport IATA code')).toBeInTheDocument
})

test('Displays submit button for journey distance', () => {
  render( < PlaneEmissionForm / > )
  expect(screen.getByTestId('submit-button')).toBeInTheDocument
  expect(screen.getByText("Submit Journey")).toBeInTheDocument
})

test('Displays Back button to return to Homepage', () => {
  render( < PlaneEmissionForm / > )
  expect(screen.getByText("Go back")).toBeInTheDocument
})

test('Displays link for IATA codes', () => {
  render(<PlaneEmissionForm/>)
  expect(screen.getByRole("link")).toHaveAttribute('href', 'https://www.iata.org/en/publications/directories/code-search/')
})