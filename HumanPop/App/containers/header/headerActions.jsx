import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    SHOW_LOGIN_FORM
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

export function login(username, password) {
    return {
        type: 'PROMISE',
        actions: ['LOOGING', LOGIN_SUCCESS, LOGIN_ERROR],
        promise: logUser(username, password)
    };
}  