import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Header2 from '../components/Header2'

test('Displays Name of Header2', () => {
  render(<Header2 />)
  expect(screen.getByText("CO2 Emissions Calculator")).toBeInTheDocument
})