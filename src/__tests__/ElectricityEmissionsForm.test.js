import React from 'react';
import '@testing-library/jest-dom'
import {
  render,
  screen
} from '@testing-library/react'
import ElectricityEmissionsForm from '../components/ElectricityEmissionsForm'
import userEvent from '@testing-library/user-event'

test('Displays Name of ElectricityEmissionsForm Component', () => {
  render( < ElectricityEmissionsForm / > )
  expect(screen.getByText("Add Electricity Usage Details")).toBeInTheDocument
})

test('Allows select options for electricity units', () => {
  render( < ElectricityEmissionsForm / > )
  userEvent.selectOptions(screen.getByTestId('unit'), ['mwh'])
  expect(screen.getByTestId('val1').selected).toBe(true)
  expect(screen.getByTestId('val2').selected).toBe(false)
})

test('Displays spinbutton for electricity value', () => {
  render( < ElectricityEmissionsForm / > )
  expect(screen.getByRole('spinbutton')).toBeInTheDocument
  expect(screen.getByText("Add Electricity Value:")).toBeInTheDocument
})

test('Displays submit button for Electricity usage', () => {
  render( < ElectricityEmissionsForm / > )
  expect(screen.getByTestId('submit-button')).toBeInTheDocument
  expect(screen.getByText("Submit Usage")).toBeInTheDocument
})

test('Displays Back button to return to Homepage', () => {
  render( < ElectricityEmissionsForm / > )
  expect(screen.getByText("Go back")).toBeInTheDocument
})
