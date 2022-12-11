
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Hello from './004-hello';

describe('Snapshot Testing', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  
  it('should render a greeting', () => {
    const root = ReactDOM.createRoot(container);
  
    act(() => {
      root.render(<Hello />);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<h1>Hello, stranger!</h1>"`);
  
    act(() => {
      root.render(
        <Hello name="Jenny" />
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<h1>Hello, Jenny!</h1>"`);
  
    act(() => {
      root.render(
        <Hello name="Margaret" />
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<h1>Hello, Margaret!</h1>"`);
  });  
});
