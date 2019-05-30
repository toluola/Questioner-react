import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Card } from '../Card';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    getMeetups: jest.fn(),
    allMeetups: jest.fn()
}

describe('Should render index component', () => {
    test('<Button /> component is rendered', () => {
    const ButtonComponent = shallow(<Provider store={store}><BrowserRouter><Card {...props}/></BrowserRouter></Provider>);
        expect(ButtonComponent).toBeTruthy();
        expect(ButtonComponent).toMatchSnapshot();
    });
});