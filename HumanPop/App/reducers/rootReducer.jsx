import { combineReducers } from 'redux';
import newHuman from '../containers/newHuman/newHumanReducer.jsx';
import humans from '../containers/humans/humansReducer.jsx'

export default combineReducers({
    newHuman,
    humans,
})

