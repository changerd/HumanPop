import {
    EDIT_HUMAN_SUCCESS,
    EDIT_HUMAN_ERROR,
    GET_HUMAN_SUCCESS,
    GET_HUMAN_ERROR,
} from './editHumanConstants.jsx';
import { getHuman, editHuman } from '../../api/humanApi.jsx'

export function loadHuman (humanId) {
    return {
        type: 'PROMISE',
        actions: ['LOADING_HUMAN', GET_HUMAN_SUCCESS, GET_HUMAN_ERROR],
        promise: getHuman(humanId)
    };
}

export function changeHuman (humanId, firstName, surName, birthDate, numOfArrests) {
    return {
        type: 'PROMISE',
        actions: ['CHANGING_HUMAN', EDIT_HUMAN_SUCCESS, EDIT_HUMAN_ERROR],
        promise: editHuman(humanId, firstName, surName, birthDate, numOfArrests)
    };
}