import { SUCCESS } from '../actions/studentManageActions'

const loadStudentInfo = (state) => {
	return {...state, 
		students:[
				{	
					name:"张三",
					college:"软件学院",
					card:"123456"
				},
				{
					name:"张三",
					college:"软件学院",
					card:"123456"
				},
				{
					name:"张三",
					college:"软件学院",
					card:"123456"
				},
				{
					name:"张三",
					college:"软件学院",
					card:"123456"
				}
			]
		}
}

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