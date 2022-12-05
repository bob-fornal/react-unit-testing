
import { unmountComponentAtNode } from "react-dom";

describe('Setup and Teardown', () => {
  let container = null;
  
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });  

  it('expects document to contain a DIV', () => {
    const testElement = document.querySelectorAll('div');
    expect(testElement.length).toEqual(1);
  });
});
