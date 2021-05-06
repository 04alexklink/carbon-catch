import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Car from '../components/Car'

test('Displays Name of Car Component', () => {
  render(<Car />)
  expect(screen.getByText("Vehicle CO2")).toBeInTheDocument
})

test('Displays Button link for car component', () => {
  render(<Car />)
  expect(screen.getByRole('button')).toBeInTheDocument
  expect(screen.getByText("Calculate Vehicle Emissions")).toBeInTheDocument
})