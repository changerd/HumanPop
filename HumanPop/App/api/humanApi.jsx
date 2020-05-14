import {
    ADD_HUMAN_SUCCESS,
    ADD_HUMAN_ERROR
} from '../containers/newHuman/newHumanConstants.jsx';
import 'isomorphic-fetch';

export function addHuman(firstName, surName, birthDate, numOfArrests, historyObject) {    
    return fetch(constants.human, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "firstName": firstName, "surName": surName, "birthDate": birthDate, "numOfArrests": numOfArrests })
    }).then((response) => {
        if (response.ok) {            
            historyObject.push('/');
        } else {
            alert('Add error...');            
        }
    }).catch((ex) => {
        alert(ex);        
    });
}   
