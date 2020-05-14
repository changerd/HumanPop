import {
    ADD_HUMAN_SUCCESS,
    ADD_HUMAN_ERROR,
} from './newHumanConstants.jsx';

const initialState = {
    error: ''
}

export default function newHuman(state = initialState, action) {
    switch (action.type) {
        case ADD_HUMAN_SUCCESS:
            return { ...state, error: '' }
        
        case ADD_HUMAN_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}