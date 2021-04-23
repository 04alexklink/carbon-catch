import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Header from '../components/Header'

test('Displays Name of Header', () => {
  render(<Header />)
  expect(screen.getByText("Carbon Catch")).toBeInTheDocument
})
