import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Button } from '../Botton';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

describe('Should render index component', () => {
    test('<Button /> component is rendered', () => {
    const ButtonComponent = shallow(<Provider store={store}><BrowserRouter><Button /></BrowserRouter></Provider>);
        expect(ButtonComponent).toBeTruthy();
        expect(ButtonComponent).toMatchSnapshot();
    });
});