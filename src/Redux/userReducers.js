const INITIAL_STATE = {
	user: null,
	token: null,
	verified: false,
}
export default function userReducer(state = INITIAL_STATE, action) {
	console.log("Redux")
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
			}
		default:
			return state
	}
}
