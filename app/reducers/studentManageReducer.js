import { SUCCESS } from '../actions/studentManageActions'

const studentManageReducer = (state={students:[]}, action) => {
	console.log(action)
	switch(action.type) {
		case SUCCESS:
			return {...state, students: action.data}
		default:
			return state
	}
}

export default studentManageReducer