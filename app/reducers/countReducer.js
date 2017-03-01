
const initialState = { count: 1 }

const countReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INCREASE':
		  return {...state, count: state.count + action.amount}
		case 'DECREASE':
			return {...state, count: state.count - action.amount}
		default: 
			return state
	}
}

export default countReducer