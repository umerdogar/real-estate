const INITIAL_STATE = {
	property: null,
	propertyDetail: null,
	singlePropertyDetail: null,
}
export default function propertyReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ALL_PROPERTIES":
			// console.log("property reducer  property" , action.payload)
			return {
				...state,
				allProperties: action.payload,
			}
		case "FILTER_PROPERTY":
			console.log("property detaillll reducer property", action.payload)
			return {
				...state,
				propertyDetail: action.payload,
			}
		case "PROPERTY_DETAIL":
			console.log("single property detaillll reducer property", action.payload)
			return {
				...state,
				singleProperty: action.payload,
			}
			case "ALL_PROPERTIES_OF_DEALER" : 
			return {
				...state,
				dealerPropertyDetail : action.payload,
			}

		default:
			return state
	}
}
