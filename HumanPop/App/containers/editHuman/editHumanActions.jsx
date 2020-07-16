import {
    EDIT_HUMAN_START,
    EDIT_HUMAN_SUCCESS,
    EDIT_HUMAN_ERROR,
    GET_HUMAN_START,
    GET_HUMAN_SUCCESS,
    GET_HUMAN_ERROR,
} from './editHumanConstants.jsx';
import { getHuman, editHuman } from '../../api/humanApi.jsx'

export function loadHuman (humanId) {
    return {
        type: 'PROMISE',
        actions: [GET_HUMAN_START, GET_HUMAN_SUCCESS, GET_HUMAN_ERROR],
        url: window.constants.human + '?humanId=' + humanId,
        method: 'GET'
    };
}

export function changeHuman (humanId, firstName, surName, birthDate, numOfArrests) {
    var editHumanData = {
        "humanId": humanId,
        "firstName": firstName, 
        "surName": surName, 
        "birthDate": birthDate, 
        "numOfArrests": numOfArrests
    }

    return {
        type: 'PROMISE',
        actions: [EDIT_HUMAN_START, EDIT_HUMAN_SUCCESS, EDIT_HUMAN_ERROR],
        url: constants.human,
        method: 'PUT',
        data: editHumanData
    };
}