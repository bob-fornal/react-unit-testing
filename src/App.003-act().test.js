
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('Default Unit Test', () => {
  test('renders learn react link', () => {
    act(() => {
      render(<App />);
    });
    
    const testElement = screen.getByText(/react unit testing application/i);
    expect(testElement).toBeInTheDocument();
  });  
});
