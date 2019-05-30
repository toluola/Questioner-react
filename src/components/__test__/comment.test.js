import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { CommentComponent } from '../Comment';

const mockStore = configureMockStore([thunk]);
const store = mockStore(jest.fn());

const props = {
    getQuestionComment: jest.fn(),
    comments: [jest.fn()],
    commentPost: jest.fn(),
    match: {params: { id: '2'}}
}

describe('Should render index component', () => {
    test('<Button /> component is rendered', () => {
    const CommentComponentTest = mount(<Provider store={store}><BrowserRouter><CommentComponent {...props}/></BrowserRouter></Provider>);
        expect(CommentComponentTest).toBeTruthy();
    });
});