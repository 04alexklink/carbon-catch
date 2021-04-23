import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders All components', () => {
  render(<App />);
  expect(screen.getByText(/Carbon Catch/i)).toBeInTheDocument;
  expect(screen.getByText("CO2 Emissions Calculator")).toBeInTheDocument
});
