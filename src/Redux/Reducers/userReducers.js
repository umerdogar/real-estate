const INITIAL_STATE = {
	user: null,
}
export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
			}
		default:
			return state
	}
}
