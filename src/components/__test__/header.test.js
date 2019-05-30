import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Header from '../Header';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    isAuthenticated: jest.fn(),
    logout: jest.fn()
}

describe('Should render index component', () => {
    test('<Button /> component is rendered', () => {
    const HeaderComponent = shallow(<Provider store={store}><BrowserRouter><Header {...props}/></BrowserRouter></Provider>);
        expect(HeaderComponent).toBeTruthy();
        expect(HeaderComponent).toMatchSnapshot();
    });
});