import {  
    ADD_HUMAN_START,    
    ADD_HUMAN_SUCCESS,
    ADD_HUMAN_ERROR,
} from './newHumanConstants.jsx';

export function addHuman(firstName, surName, birthDate, numOfArrests) {
    var newHumanData = {
        "firstName": firstName, 
        "surName": surName, 
        "birthDate": birthDate, 
        "numOfArrests": numOfArrests
    }
    
    return {
        type: 'PROMISE',
        actions: [ADD_HUMAN_START, ADD_HUMAN_SUCCESS, ADD_HUMAN_ERROR],
        url: constants.human,
        method: 'POST',
        data: newHumanData,
        };
}