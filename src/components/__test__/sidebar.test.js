import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import SideBarQuestion from '../SideBarQuestion';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    getMeetup: jest.fn(),
    meetups: jest.fn()
}

describe('Should render index component', () => {
    test('<SideBarQuestion /> component is rendered', () => {
    const SidebarComponent = shallow(<Provider store={store}><BrowserRouter><SideBarQuestion {...props}/></BrowserRouter></Provider>);
        expect(SidebarComponent).toBeTruthy();
        expect(SidebarComponent).toMatchSnapshot();
    });
});