
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";

import Contact from "./006-contact";
import MockedMap from "./006-map";

jest.mock("./006-map", () => {
  return function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

describe('Mocking Modules', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    container.remove();
    container = null;
  });
  
  it('should render contact information', () => {
    const center = { lat: 0, long: 0 };

    act(() => {
      ReactDOM.createRoot(container).render(
        <Contact
          name="Joni Baez"
          email="test@example.com"
          site="http://test.com"
          center={center}
        />
      );
    });  
    const email = container.querySelector('[data-testid=\'email\']').getAttribute('href');
    const site = container.querySelector('[data-testid=\'site\']').getAttribute('href');
    const map = container.querySelector('[data-testid=\'map\']').textContent;
    expect(email).toEqual('mailto:test@example.com');
    expect(site).toEqual('http://test.com');
    expect(map).toEqual('0:0');
  });
});
