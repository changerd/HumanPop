import {    
    ADD_HUMAN_ERROR,
    ADD_HUMAN_SUCCESS
} from './newHumanConstants.jsx';
import { addHuman } from '../../api/humanApi.jsx';

export function addingHuman(firstName, surName, bitrhDate, numOfArrests, historyObject) {    
    return {
        type: 'PROMISE',
        actions: ['ADDING_HUMAN', ADD_HUMAN_SUCCESS, ADD_HUMAN_ERROR],
        promise: addHuman(firstName, surName, bitrhDate, numOfArrests, historyObject)
    };
}