import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import CarEmissionForm from '../components/CarEmissionForm'
import userEvent from '@testing-library/user-event'


test('Displays Name of CarEmissionForm Component', () => {
  render(<CarEmissionForm />)
  expect(screen.getByText("Add Car Journey Info")).toBeInTheDocument
})

test('Allows select options for car distance units', () => {
  render(<CarEmissionForm />)
  userEvent.selectOptions(screen.getByTestId('distance'), ['miles'])
  expect(screen.getByTestId('val1').selected).toBe(true)
  expect(screen.getByTestId('val2').selected).toBe(false)
})

test('Displays spinbutton for journey distance', () => {
  render(<CarEmissionForm />)
  expect(screen.getByRole('spinbutton')).toBeInTheDocument
  expect(screen.getByText("Add journey distance:")).toBeInTheDocument
})

test('Displays submit button for journey distance', () => {
  render(<CarEmissionForm />)
  expect(screen.getByRole('button')).toBeInTheDocument
  expect(screen.getByText("Submit Journey")).toBeInTheDocument
})

