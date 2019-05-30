import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MainPage from '../index';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    isAuthenticated: jest.fn()   
   }

describe('Should render index component', () => {
    test('<Index /> component is rendered', () => {
const IndexComponent = shallow(<Provider store={store}><BrowserRouter><MainPage {...props}/></BrowserRouter></Provider>);
        expect(IndexComponent).toBeTruthy();
        expect(IndexComponent).toMatchSnapshot();
    });
});