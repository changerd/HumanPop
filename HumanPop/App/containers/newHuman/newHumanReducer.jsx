import {
    ADD_HUMAN_START,
    ADD_HUMAN_SUCCESS,
    ADD_HUMAN_ERROR,
} from './newHumanConstants.jsx';

const initialState = {
    isSaved: false,
    error: ''
}

export default function newHuman(state = initialState, action) {
    switch (action.type) {
        case ADD_HUMAN_START:
            return { ...state, isSaved: false, error: ''}

        case ADD_HUMAN_SUCCESS:
            return { ...state, isSaved: true, error: '' }
        
        case ADD_HUMAN_ERROR:
            return { ...state, isSaved: false, error: action.payload }

        default:
            return state;
    }
}