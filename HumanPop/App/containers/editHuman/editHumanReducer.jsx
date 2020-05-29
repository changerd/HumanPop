import {
    EDIT_HUMAN_SUCCESS,
    EDIT_HUMAN_ERROR,
    GET_HUMAN_SUCCESS,
    GET_HUMAN_ERROR
} from './editHumanConstants.jsx'

const initialState = {
    human: { },
    error: ''
}

export default function editHuman(state = initialState, action) {
    switch(action.type) {
        case EDIT_HUMAN_SUCCESS:
            return { ...state, error: '' }

        case EDIT_HUMAN_ERROR:
            return { ...state, error: action.payload }

        case GET_HUMAN_SUCCESS:
            return { ...state, human: action.payload, error: ''}

        case GET_HUMAN_ERROR:
            return { ...state, error: action.payload }
            
        default:
            return state;
    }
}