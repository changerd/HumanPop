import AuthHelper from '../Utils/authHelper.js';
import "isomorphic-fetch"

export function logUser(username, password) {
    if (username && password) {
        var data = {
            username: username,
            password: password
        };

        return fetch(constants.token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok){
                return response.json();
            } else {
                throw 'Autheration error...'
            }
        }).then((data) => {
            AuthHelper.saveAuth(data.username, data.access_token);
        });//.catch(ex => alert(ex));
    } else {
        alert('Enter your username and password');
    }


}