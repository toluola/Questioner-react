import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Hero } from '../Hero';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

describe('Should render index component', () => {
    test('<Hero /> component is rendered', () => {
    const HeroComponent = shallow(<Provider store={store}><BrowserRouter><Hero /></BrowserRouter></Provider>);
        expect(HeroComponent).toBeTruthy();
        expect(HeroComponent).toMatchSnapshot();
    });
});