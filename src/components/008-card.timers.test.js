
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";

import Card from "./008-card";

describe('Timers', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    container.remove();
    container = null;
    jest.useRealTimers();
  });
  
  it("should select null after timing out", () => {
    const onSelect = jest.fn();
    act(() => {
      ReactDOM.createRoot(container).render(
        <Card onSelect={onSelect} />
      );
    });
  
    // move ahead in time by 100ms
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();
  
    // and then move ahead by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith(null);
  });
  
  it("should cleanup on being removed", () => {
    const onSelect = jest.fn();
    let root = ReactDOM.createRoot(container);
    
    act(() => {
      root.render(
        <Card onSelect={onSelect} />
      );
    });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();
  
    // unmount the app
    act(() => {
      root.render(null);
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onSelect).not.toHaveBeenCalled();
  });
  
  it("should accept selections", () => {
    const onSelect = jest.fn();
    act(() => {
      ReactDOM.createRoot(container).render(
        <Card onSelect={onSelect} />
      );
    });
  
    act(() => {
      container
        .querySelector("[data-testid='2']")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(onSelect).toHaveBeenCalledWith(2);
  });  
});
