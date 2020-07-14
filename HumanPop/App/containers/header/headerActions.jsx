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
import { logUser } from '../../api/identityApi.jsx'
import "isomorphic-fetch"

export function showLoginForm(show) {
    return {
        type: SHOW_LOGIN_FORM,
        payload: show
    }
}

export function logout() {
    AuthHelper.clearAuth();
    return {
        type: LOGOUT
    }
}

export function login(userName, password) {
    var identityData = {
        'username': userName,
        'password': password
    }

    return {
        type: 'PROMISE',
        actions: [LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR],
        url: constants.token,
        method: 'POST',
        data: identityData
    };
}

export function register(userName, password, confirmPassword) {
    var registerData = {
        'username': userName,
        'password': password,
        'confirmPassword': confirmPassword
    }

    return {
        type: 'PROMISE',
        actions: [REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR],
        url: constants.register,
        method: 'POST',
        data: registerData
    };
}