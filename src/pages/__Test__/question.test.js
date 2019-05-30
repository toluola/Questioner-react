import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Question from '../Questions';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

describe('Should render index component', () => {
    test('<Index /> component is rendered', () => {
    const IndexComponent = shallow(<Provider store={store}><BrowserRouter><Question /></BrowserRouter></Provider>);
        expect(IndexComponent).toBeTruthy();
        expect(IndexComponent).toMatchSnapshot();
    });
});