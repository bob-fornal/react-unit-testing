
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Counter from './counter';

describe('Counter Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('expects "increment" to increment', () => {
    const root = ReactDOM.createRoot(container);
    act(() => {
      root.render(<Counter />);
    });
    const counter = document.querySelector('[data-testid=counter]');
    const incrementBtn = document.querySelector('[data-testid=increment]');

    act(() => {
      incrementBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(counter).toHaveTextContent('1');
  });

  it('expects "decrement" to decrement', () => {
    const root = ReactDOM.createRoot(container);
    act(() => {
      root.render(<Counter />);
    });
    const counter = document.querySelector('[data-testid=counter]');
    const decrementBtn = document.querySelector('[data-testid=decrement]');

    act(() => {
      decrementBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(counter).toHaveTextContent('-1');
  });
});
