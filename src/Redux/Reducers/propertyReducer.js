const INITIAL_STATE = {
	property: null,
}
export default function propertyReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ALL_PROPERTIES":
			console.log("property reducer  property" , action.payload)
			return {
				...state,
                property:action.payload,
			}
		default:
			return state
	}
}
