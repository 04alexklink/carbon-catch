import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import CarEmissionForm from '../components/CarEmissionForm'


test('Displays Name of CarEmissionForm Component', () => {
  render(<CarEmissionForm />)
  expect(screen.getByText("Add Car Journey Info")).toBeInTheDocument
})

test('Displays Dropdown link for car distance units', () => {
  render(<CarEmissionForm />)
  expect(screen.getByRole('combobox')).toBeInTheDocument
  expect(screen.getAllByRole('option')).toBeInTheDocument
  expect(screen.getByText("Choose Miles or Km's")).toBeInTheDocument
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

