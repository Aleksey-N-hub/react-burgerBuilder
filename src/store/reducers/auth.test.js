import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

// import React from 'react';

// import {configure, shallow} from 'enzyme';


describe('auth reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
        })
    });

    it('should store token after login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {type: actionTypes.AUTH_SUCCESS,
            idToken: 'something',
            userId: 'some-user-ID'
        })).toEqual({
            token: 'something',
            userId: 'some-user-ID',
            error: null,
            loading: false,
            authRedirectPath: '/'
    });
    })
    
});
