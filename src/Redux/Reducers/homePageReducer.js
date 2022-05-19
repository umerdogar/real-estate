const INITIAL_STATE = {
	popularCities: null,
}
export default function popularCitiesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "POPULAR_CITY":
			// console.log("reduccer" , action.payload)
			return {
				...state,
				popularCities: action.payload,
			}
		case "FILTER_PROPERTY":
			// console.log("reduccer" , action.payload)
			return {
				...state,
				popularCities: action.payload,
			}
			case "PLOTS_DATA":
				// console.log("reduccer" , action.payload)
				return {
					...state,
					plotsData: action.payload,
				}
				case "COMMERCIAL_DATA":
				// console.log("reduccer" , action.payload)
				return {
					...state,
					commercialData: action.payload,
				}
		default:
			return state
	}
}
