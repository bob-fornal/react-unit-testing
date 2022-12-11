
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import axios from 'axios';
jest.mock('axios');

const dummyTodos = [{
  userId: 1,
  id: 1,
  title: "todo 1",
  completed: false,
}, {
  userId: 1,
  id: 2,
  title: "todo 2",
  completed: false,
}, {
  userId: 1,
  id: 3,
  title: "todo 3",
  completed: false,
}];
  
axios.get.mockResolvedValue({ data: dummyTodos });

describe('Todos Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("todos list", async () => {
    axios.get.mockResolvedValue({ data: dummyTodos });
    act(() => {
      ReactDOM.container(container).render(<Todos />);
    });
    
    const todoList = await waitFor(() => screen.findAllByTestId("todo"));
    
    expect(todoList).toHaveLength(3);
  });
});
