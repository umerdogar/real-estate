const INITIAL_STATE = {
	popularCities: null,
}
export default function popularCitiesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "POPULAR_CITY":
			console.log("reduccer for popular cities", action.payload)
			return {
				...state,
				popularCities: action.payload,
			}
		case "FILTER_PROPERTY":
			// change hai yahan pe
			console.log("reduccer ", action.payload)
			return {
				...state,
				propertyFilter: action.payload,
			}
		case "PLOTS_DATA":
			// console.log("reduccer" , action.payload)
			// console.log(action.payload, "Reducer of PLOTS_DATA")
			return {
				// ...state,
				plotsData: action.payload,
			}
		case "Carousel_Data":
			// console.log("reduccer" , action.payload)
			return {
				...state,
				Carousel_Data: action.payload,
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
