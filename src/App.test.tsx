import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Vite logo', () => {
    render(<App />);
    const elements = screen.getAllByText(/Vite/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});