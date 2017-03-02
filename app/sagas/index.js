import { fork, take, call, put } from 'redux-saga/effects'
import { studentInfoActions } from '../actions/studentManageActions'
import { students } from './students'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* fetchStudentInfo() {
	console.log(students)
	yield delay(5000)
	yield put(studentInfoActions.success(students))
}

function* watchRequestStudentInfo() {
	console.log('watchRequestStudentInfo')
	while(true) {
		yield take(studentInfoActions.request)
		yield call(fetchStudentInfo)
	}
}

export default function* root() {
	yield fork(watchRequestStudentInfo)
}