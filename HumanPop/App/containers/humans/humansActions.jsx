import {
    GET_HUMANS_START,
    GET_HUMANS_SUCCESS,
    GET_HUMANS_ERROR,
    DELETE_HUMAN_START,
    DELETE_HUMAN_SUCCESS,
    DELETE_HUMAN_ERROR,
} from './humansConstants.jsx';

export function loadHumans(pageIndex = 0) {
    let queryTrailer = '?pageIndex=' + pageIndex;
    return {
        type: 'PROMISE',
        actions: [GET_HUMANS_START, GET_HUMANS_SUCCESS, GET_HUMANS_ERROR],
        url: window.constants.page + queryTrailer, 
        method: 'GET',        
    };
}

export function removeHuman(humanId) {
    return {
        type: 'PROMISE',
        actions: [DELETE_HUMAN_START, DELETE_HUMAN_SUCCESS, DELETE_HUMAN_ERROR],
        url: window.constants.human + '?humanId=' + humanId,
        method: 'DELETE',
    };
} 