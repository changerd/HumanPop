import { combineReducers } from 'redux';
import newHuman from '../containers/newHuman/newHumanReducer.jsx';
import humans from '../containers/humans/humansReducer.jsx';
import editHuman from '../containers/editHuman/editHumanReducer.jsx';

export default combineReducers({
    newHuman,
    humans,
    editHuman,
})

