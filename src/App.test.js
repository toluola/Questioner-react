import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from './App';

const mockStore = configureMockStore([thunk]);

const store = mockStore(jest.fn());


it('renders without crashing', () => {
  const div = document.createElement('div');
 shallow(<Provider store={store}><Router><App /></Router></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
