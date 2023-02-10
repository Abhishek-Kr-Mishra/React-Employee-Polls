import { render, screen } from '@testing-library/react';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import { MemoryRouter } from 'react-router-dom';

const store = createStore(reducer, middleware)

test('renders learn react link', () => {
  const view = render(
  <MemoryRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>
  )
  screen.debug()
  expect(view).toMatchSnapshot();
});
