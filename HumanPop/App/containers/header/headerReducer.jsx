import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    SHOW_LOGIN_FORM,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from './headerConstants.jsx';
import AuthHelper from '../../Utils/authHelper.js';
import { Redirect } from 'react-router-dom';
import React from 'react';

const initialState = {
    isLogged: AuthHelper.isLogged(),
    name: AuthHelper.getLogin(),
    password: '',
    error: '',
    isLoginFormShowed: false,
    isRegistered: false
}

export default function header(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, isLogged: false, name: '', name: '', password: '', error: '' }

        case LOGIN_SUCCESS:
            AuthHelper.saveAuth(action.payload.username, action.payload.access_token);                      
            return { ...state, isLogged: true, isLoginFormShowed: false, name: action.payload, password: '', error: '' }            

        case LOGIN_ERROR:
            alert('Auth error');
            return { ...state, error: action.payload }

        case LOGOUT:
            return { ...state, isLogged: false, name: '', password: '' }

        case SHOW_LOGIN_FORM:
            return { ...state, isLoginFormShowed: action.payload }

        case REGISTER_START:
            return { ...state, isRegistered: false, error: '' }

        case REGISTER_SUCCESS:
            alert(action.payload.message);
            if(action.payload.message == 'Registration completed') {                
                $('#registerModal').modal('toggle');
            }             
            return { ...state, isRegistered: true, error: '' }

        case REGISTER_ERROR:            
            return { ...state, isRegistered: false, error: action.payload }

        default:
            return state;
    }
}