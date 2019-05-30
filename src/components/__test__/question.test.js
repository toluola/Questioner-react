import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Question } from '../SideBarQuestion';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

// const mapStateToProps = state => ({
//     questions: state.State.questions,             
//     upvotes: state.State.upvote,
//     downvotes: state.State.downvote
//     });

const props = {
    match: {params: { id: '2'}},
    singleQuestion: jest.fn(),
    questions: jest.fn(),
    upvote: jest.fn(),
    upvotes: jest.fn(),
    downvote: jest.fn(),
    downvotes: jest.fn(),
}

describe('Should render index component', () => {
    test('<Meetup /> component is rendered', () => {
    const QuestionComponent = mount(<Provider store={store}><BrowserRouter><Question {...props}/></BrowserRouter></Provider>);
        expect(QuestionComponent).toBeTruthy();
    });
});