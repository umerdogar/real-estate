const INITIAL_STATE = {
	popularCities : null,
}
export default function popularCitiesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "POPULAR_CITY":
			console.log("reduccer" , action.payload)
			return {
				...state,
				popularCities:action.payload,
			}
		default:
			return state
	}
}
