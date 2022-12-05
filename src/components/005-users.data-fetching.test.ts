
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import User from './005-user';

describe('Data Fetching', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders user data', async () => {
    const fakeUser = {
      name: 'Bob Fornal',
      age: 54,
      address: '1234 Someplace Else Avenue'
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(fakeUser)
    });

    act(() => {
      ReactDOM.createRoot(container).render(<User id="1234" />);
    });
    expect(global.fetch).toHaveBeenCalled();
  });

});