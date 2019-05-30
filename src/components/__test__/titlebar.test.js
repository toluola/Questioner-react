import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import TitleBar from '../TitleBar';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    content: jest.fn()
}

describe('Should render TitleBar component', () => {
    test('<TitleBar /> component is rendered', () => {
    const TitlebarComponent = shallow(<Provider store={store}><BrowserRouter><TitleBar {...props}/></BrowserRouter></Provider>);
        expect(TitlebarComponent).toBeTruthy();
        expect(TitlebarComponent).toMatchSnapshot();
    });
});