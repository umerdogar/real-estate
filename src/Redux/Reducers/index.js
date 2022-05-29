import { combineReducers } from "redux"
import popularCitiesReducers from "./homePageReducer"
import propertyReducer from "./propertyReducer"
import PageRefresherReducer from "./PageRefresh"
import authReducer from "./authReducer"

const RootReducers = combineReducers({
	popularCitiesReducers,
	propertyReducer,
	PageRefresherReducer,
	authReducer,
})

export default RootReducers
