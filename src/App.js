import Home from "./screen/Home"
import Form from "./screen/Forms"
import "./App.css"
import Details from "./screen/Details"
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore, compose } from "redux"
import ReduxThunk from "redux-thunk"
import RootReducers from "./Redux/Reducers"
import Routes from "../src/Routes"

function App() {
	// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// const store = createStore(RootReducers, composeEnhancers(applyMiddleware()))

	const store = createStore(RootReducers, {}, applyMiddleware(ReduxThunk))
	return (
		<Provider store={store}>
			<div className="App">
				<Routes />
			</div>
		</Provider>
	)
}

export default App
