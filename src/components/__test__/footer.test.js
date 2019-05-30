import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Footer } from '../Footer';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

describe('Should render index component', () => {
    test('<Button /> component is rendered', () => {
    const FooterComponent = shallow(<Provider store={store}><BrowserRouter><Footer /></BrowserRouter></Provider>);
        expect(FooterComponent).toBeTruthy();
        expect(FooterComponent).toMatchSnapshot();
    });
});