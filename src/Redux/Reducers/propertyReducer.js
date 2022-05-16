const INITIAL_STATE = {
	property: null,
    propertyDetail:null,
}
export default function propertyReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ALL_PROPERTIES":
			console.log("property reducer  property" , action.payload)
			return {
				...state,
                property:action.payload,
			}
            case "FILTER_PROPERTY":
			console.log("property detaillll reducer property" , action.payload)
                return {
                    ...state,
                    propertyDetail:action.payload,
                }
		default:
			return state
	}
}
