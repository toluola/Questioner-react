import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Meetup } from '../MeetupDetails';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    match: {params: { id: '2'}},
    getOneMeetup: jest.fn(),
    singleMeetup: [jest.fn()],
    question: jest.fn()
}

describe('Should render index component', () => {
    test('<Meetup /> component is rendered', () => {
    const MeetupComponent = mount(<Provider store={store}><BrowserRouter><Meetup {...props}/></BrowserRouter></Provider>);
        expect(MeetupComponent).toBeTruthy();
    });
});