import { combineReducers } from 'redux';
import countReducer from './countReducer';
import studentManageReducer from './studentManageReducer'

const rootReducer = combineReducers({
	countState:countReducer,
	studentManageState:studentManageReducer
});

export default rootReducer;