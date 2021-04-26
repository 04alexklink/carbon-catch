import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Car from '../components/Car'

test('Displays Name of Car Component', () => {
  render(<Car />)
  expect(screen.getByText("Car CO2")).toBeInTheDocument
})