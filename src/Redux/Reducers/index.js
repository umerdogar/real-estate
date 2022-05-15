import { combineReducers } from "redux"
import popularCitiesReducers from "./homePageReducer"
import propertyReducer from "./propertyReducer"

const RootReducers = combineReducers({
     popularCitiesReducers,
	 propertyReducer,
})

export default RootReducers
