import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MeetupDetails from '../MeetupDetails';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    match: jest.fn(),
    getOneMeetup: jest.fn(),
    singleMeetup: jest.fn(),
    question: jest.fn()
}

describe('Should render index component', () => {
    test('<Meetup /> component is rendered', () => {
    const MeetupComponent = shallow(<Provider store={store}><BrowserRouter><MeetupDetails {...props}/></BrowserRouter></Provider>);
        expect(MeetupComponent).toBeTruthy();
        expect(MeetupComponent).toMatchSnapshot();
    });
});