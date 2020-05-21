import {
    GET_HUMANS_SUCCESS,
    GET_HUMANS_ERROR,
    DELETE_HUMAN_SUCCESS,
    DELETE_HUMAN_ERROR,
} from './humansConstants.jsx';
import { getHumans, deleteHuman } from './../../api/humanApi.jsx';

export function loadHumans(pageIndex) {
    return {
        type: 'PROMISE',
        actions: ['HUMAN_LOADING', GET_HUMANS_SUCCESS, GET_HUMANS_ERROR],
        promise: getHumans(pageIndex)
    };
}

export function removeHuman(humanId, returnPageIndex) {
    return {
        type: 'PROMISE',
        actions: ['HUMAN_DELETING', GET_HUMANS_SUCCESS, GET_HUMANS_ERROR],
        promise: deleteHuman(humanId, returnPageIndex)
    };
}
