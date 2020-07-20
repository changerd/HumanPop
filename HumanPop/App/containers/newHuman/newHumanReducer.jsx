import {
    ADD_HUMAN_START,
    ADD_HUMAN_SUCCESS,
    ADD_HUMAN_ERROR,
} from './newHumanConstants.jsx';

const initialState = {    
    error: ''
}

export default function newHuman(state = initialState, action) {
    switch (action.type) {
        case ADD_HUMAN_START:
            return { ...state, error: ''}

        case ADD_HUMAN_SUCCESS:
            window.history.back();
            return { ...state, error: '' }
        
        case ADD_HUMAN_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}