import { combineReducers } from "redux"
import userReducers from "./userReducers"

const RootReducers = combineReducers({
	userReducer: userReducers,
})

export default RootReducers
