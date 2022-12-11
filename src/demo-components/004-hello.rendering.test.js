
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Hello from './004-hello';

describe('Rendering', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('expects to render with a name', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Hello name="Jennifer" />);
    });
    expect(container.textContent).toEqual('Hello, Jennifer!');
  });

  it('expects to render without a name', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Hello />);
    });
    expect(container.textContent).toEqual('Hello, stranger!');
  });
});