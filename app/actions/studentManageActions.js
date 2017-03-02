
export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const studentInfoActions = {
	request: () =>({type: REQUEST}),
	success: (data) => ({type: SUCCESS, data}),
	failure: (error) => ({type: FAILURE, error})
}