import { combineReducers } from "redux"
import popularCitiesReducers from "./homePageReducer"
import propertyReducer from "./propertyReducer"
import PageRefresherReducer from "./PageRefresh"
const RootReducers = combineReducers({
	popularCitiesReducers,
	propertyReducer,
	PageRefresherReducer,
})

export default RootReducers
