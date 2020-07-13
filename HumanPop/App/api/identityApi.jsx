import AuthHelper from '../Utils/authHelper.js';
import "isomorphic-fetch"

export function logUser(userName, password) {
    if (userName && password) {
        var data = {
            'username': userName,
            'password': password
        };

        return fetch(constants.token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                //dispatch({ type: LOGIN_ERROR, payload: 'Ошибка авторизации' });
                throw 'Ошибка авторизации';
            }
        }).then((data) => {
            AuthHelper.saveAuth(data.username, data.access_token);
            //dispatch({ type: LOGIN_SUCCESS, payload: data.username });
        }).catch((ex) => {
            alert(ex);            
            //dispatch({ type: LOGIN_ERROR, payload: ex });
        });
    } else {
        alert('Необходимо ввести имя пользователя и пароль');
        //dispatch({ type: LOGIN_ERROR, payload: 'Необходимо ввести имя пользователя и пароль' });
    }
}