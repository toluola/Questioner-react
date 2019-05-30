import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Menu } from '../Menu';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

describe('Should render index component', () => {
    test('<Menu /> component is rendered', () => {
    const MenuComponent = mount(<Provider store={store}><BrowserRouter><Menu /></BrowserRouter></Provider>);
        expect(MenuComponent).toBeTruthy();
        expect(MenuComponent).toMatchSnapshot();
    });
});