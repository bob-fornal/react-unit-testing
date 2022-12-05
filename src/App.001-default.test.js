
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Default Unit Test', () => {
  test('renders learn react link', () => {
    render(<App />);
    
    const testElement = screen.getByText(/react unit testing application/i);
    expect(testElement).toBeInTheDocument();
  });  
});
