const INITIAL_STATE = {
	user: null,
	loading: "",
	error: "",
	loadingMessage: "",
}
export default function authReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "LOGIN":
			console.log("LOGIN USER FROM REDUCERs", action.payload)
			return {
				...state,
				user: action.payload,
			}
		case "START_LOADER":
			return {
				...state,
				loading: true,
				error: undefined,
				loadingMessage: action.payload,
			}
		case "STOP_LOADER":
			return {
				...state,
				loading: false,
				loadingMessage: "",
			}

		case "MY_PROFILE":
			return {
				...state,
				myProfileData: action.payload,
			}

		default:
			return state
	}
}
